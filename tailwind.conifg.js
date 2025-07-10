import tailwindTypography from "@tailwindcss/typography";

export default {
    plugins: [
        tailwindTypography
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h2: {'@apply m-0': {}},
                        p: {marginTop: "0"}
                    }
                }
            }
        }
    }
}