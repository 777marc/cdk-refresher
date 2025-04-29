#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkRefresherStack } from "../lib/cdk-refresher-stack";
import { PhotoStack } from "../lib/photoStack/PhotoStack";

const app = new cdk.App();
//new CdkRefresherStack(app, "CdkRefresherStack");

new PhotoStack(app, "PhotoBucketStack");
