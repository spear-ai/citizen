import { policyManager } from "@pulumi/compliance-policy-manager";
import { ResourceValidationPolicy } from "@pulumi/policy";

// Advisory policies are disabled because developers ignore warnings.
// We are awaiting Pulumi support for ignore-statements so that advisory policies can be upgraded to “mandatory”:
// https://github.com/pulumi/pulumi-policy/issues/240
const advisoryPolicyNameList = new Set([
  "awsnative-rds-dbcluster-configure-customer-managed-key",
  "awsnative-rds-dbinstance-configure-customer-managed-key",
  "awsnative-s3-bucket-enable-replication-configuration",
]);

export const managedPolicyList: ResourceValidationPolicy[] = policyManager
  .selectPolicies(
    {
      frameworks: ["cis", "hitrust", "iso27001", "pcidss"],
    },
    "mandatory",
  )
  .map((policy) => {
    if (advisoryPolicyNameList.has(policy.name)) {
      return {
        ...policy,
        enforcementLevel: "disabled",
      };
    }

    // Amazon S3 now applies server-side encryption (SSE-S3) by default
    if (policy.name === "awsnative-s3-bucket-enable-server-side-encryption") {
      return {
        ...policy,
        enforcementLevel: "disabled",
      };
    }

    return policy;
  });
