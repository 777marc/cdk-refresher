#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
//import { CdkRefresherStack } from "../lib/cdk-refresher-stack";
import { PhotoStack } from "../lib/photoStack/PhotoStack";
import { PhotosHandlerStack } from "../lib/photoStack/PhotoHandlerStack";
import { BucketTagger } from "../bin/Tagger";

const app = new cdk.App();
//new CdkRefresherStack(app, "CdkRefresherStack");
const photoStack = new PhotoStack(app, "PhotoStack");
new PhotosHandlerStack(app, "PhotoHandlerStack", {
  targetBucketArn: photoStack.photosBucketArn,
});

const tagger = new BucketTagger("level", "test");
cdk.Aspects.of(app).add(tagger);
