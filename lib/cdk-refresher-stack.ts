import * as cdk from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { L3Bucket } from "./s3bucket/L3Bucket";

export class CdkRefresherStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const duration = new cdk.CfnParameter(this, "duration", {
      default: 2,
      minValue: 1,
      maxValue: 7,
      type: "Number",
    });

    const myL2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(duration.valueAsNumber),
        },
      ],
    });

    new L3Bucket(this, "MyL3Bucket", duration.valueAsNumber);

    new cdk.CfnOutput(this, "MyL3BucketName", {
      value: myL2Bucket.bucketName,
    });
  }
}
