export const RUBRIC_KEYS = ["Correctness", "Efficiency", "Readability"] as const;

export type RubricCategory = (typeof RUBRIC_KEYS)[number];

export const STANDARD_RUBRIC = {
    categories: [
        {
            key: "Correctness",
            label: "Correctness",
            description: "Logic, accuracy, and handling of expected results."
        },
        {
            key: "Efficiency",
            label: "Efficiency",
            description: "Time and space efficiency, avoiding unnecessary work."
        },
        {
            key: "Readability",
            label: "Readability",
            description: "Clarity, structure, naming, and formatting."
        }
    ]
} as const;

export const normalizeRubricCategory = (value?: string | null): RubricCategory | undefined => {
    if (!value) {
        return undefined;
    }
    const trimmed = value.trim();
    return (RUBRIC_KEYS as readonly string[]).includes(trimmed) ? (trimmed as RubricCategory) : undefined;
};

export const inferRubricCategory = (value?: string | null): RubricCategory => {
    const text = (value || "").toLowerCase();

    if (text.includes("perf") || text.includes("efficien") || text.includes("optimiz") || text.includes("complex")) {
        return "Efficiency";
    }
    if (text.includes("read") || text.includes("style") || text.includes("format") || text.includes("clar")) {
        return "Readability";
    }
    if (text.includes("correct") || text.includes("logic") || text.includes("accur") || text.includes("bug")) {
        return "Correctness";
    }

    return "Correctness";
};
