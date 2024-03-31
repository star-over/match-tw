import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  algorithmVariants, defaultColor, spotCountsVariants, validateColor,
} from "./colorUtil";

const queryParams = {

  targetTextColor: {
    queryAlias: "c",
    defaultValue: defaultColor,
    validate: (colorName) => validateColor(colorName),
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

export function getServerSearchParamsState(name, searchParams) {
  const { queryAlias, defaultValue, validate } = queryParams[name];
  const queryValue = searchParams[queryAlias] ?? defaultValue;
  return validate(queryValue)
    ? queryValue
    : defaultValue;
}

export function useSearchParamsState(name) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { queryAlias, defaultValue, validate } = queryParams[name];

  // todo: refactor this to understandable way
  const value = searchParams.get(queryAlias) ?? defaultValue;
  const isValid = validate(value);

  function setValue(newValue) {
    const params = new URLSearchParams(searchParams);

    if (newValue === defaultValue) {
      params.delete(queryAlias);
    } else {
      params.set(queryAlias, newValue);
    }

    router.push(`${pathname}?${params}`, { scroll: false });
  }

  if (!isValid) setValue(defaultValue);

  return [value, setValue];
}
