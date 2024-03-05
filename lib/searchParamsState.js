import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { algorithmVariants, defaultColor, spotCountsVariants } from "./colorUtil";

// todo: add validate func to check if valuefrom query is correct
const queryParams = {
  targetColor: {
    queryAlias: "c",
    defaultValue: defaultColor,
    validate: () => true,
  },

  algorithm: {
    queryAlias: "a",
    defaultValue: algorithmVariants[0],
    validate: (value) => algorithmVariants.includes(value),
  },

  spotCount: {
    queryAlias: "n",
    defaultValue: spotCountsVariants[0],
    validate: (value) => spotCountsVariants.includes(value),
  },
};

export function useSearchParamsState(name) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { queryAlias, defaultValue, validate } = queryParams[name];

  // todo: refactor this to understandable way
  const queryValue = searchParams.get(queryAlias) ?? defaultValue;
  const value = validate(queryValue)
    ? queryValue
    : defaultValue;

  function setValue(newValue) {
    const params = new URLSearchParams(searchParams);

    if (newValue === defaultValue) {
      params.delete(queryAlias);
    } else {
      params.set(queryAlias, newValue);
    };

    router.push(`${pathname}?${params}`);
  }


  return [value, setValue];
}
