import { ResourceValidationPolicy } from "@pulumi/policy";

export const createResourceNameCasingPolicy = (options?: {
  ignoreTypeList?: string[];
}): ResourceValidationPolicy => {
  const { ignoreTypeList = [] } = options ?? {};

  return {
    description: "Checks that resource names are properly cased.",
    enforcementLevel: "mandatory",
    name: "resource-name-casing",
    validateResource({ name, type }, reportViolation) {
      // Avoid validating providers. e.g. “pulumi:providers:aws:*”
      if (type.startsWith("pulumi:providers:")) {
        return;
      }

      if (ignoreTypeList.includes(type)) {
        return;
      }

      if (!/^[\da-z]+(?:-[\da-z]+)*$/v.test(name)) {
        reportViolation("Resource names should be kebab cased.");
      }
    },
  };
};
