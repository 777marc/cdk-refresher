#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkRefresherStack } from "../lib/cdk-refresher-stack";

const app = new cdk.App();
new CdkRefresherStack(app, "CdkRefresherStack");
