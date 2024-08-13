import { managedPolicyList } from "@/managed-policy-list";
import { createResourceNameCasingPolicy } from "@/resource-name-casing-policy";

export const policyList = [
  ...managedPolicyList,
  createResourceNameCasingPolicy({
    ignoreTypeList: ["aws:secretsmanager:Secret", "aws-native:secretsmanager:Secret"],
  }),
];
