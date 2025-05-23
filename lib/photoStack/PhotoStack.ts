import * as cdk from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotoStack extends cdk.Stack {
  private stackSuffix: string;
  public readonly photosBucketArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    const photoBucketName: string = "photos-bucket";

    const photosBucket = new Bucket(this, photoBucketName, {
      bucketName: `photos-bucket-${this.stackSuffix}-v1`,
    });

    this.photosBucketArn = photosBucket.bucketArn;
  }

  private initializeSuffix() {
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split("/", this.stackId));
    this.stackSuffix = cdk.Fn.select(2, cdk.Fn.split("-", shortStackId));
  }
}
