export type ColorPalette = Record<string, Record<string, string>>;
export const Colors: ColorPalette = {
    primary: {
        DEFAULT: '#3B82F6',
        50: '#EBF2FE',
        100: '#D7E6FD',
        200: '#B0CDFB',
        300: '#89B4FA',
        400: '#629BF8',
        500: '#3B82F6',
        600: '#0B61EE',
        700: '#084BB8',
        800: '#063583',
        900: '#041F4D',
        950: '#021532',
    },
    gray: {
        DEFAULT: '#6b7280',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
    },
    destructive: {
        DEFAULT: '#EF4444',
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
        950: '#450A0A',
    },
    positive: {
        DEFAULT: '#10B981',
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
        950: '#022c22',
    },
};
