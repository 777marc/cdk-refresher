import * as cdk from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { L3Bucket } from "./s3bucket/L3Bucket";

export class CdkRefresherStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myL2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2),
        },
      ],
    });

    new L3Bucket(this, "MyL3Bucket", 2);

    new cdk.CfnOutput(this, "MyL3BucketName", {
      value: myL2Bucket.bucketName,
    });
  }
}
