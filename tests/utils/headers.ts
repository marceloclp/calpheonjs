import chalk from "chalk";

export const title = (str: string): string => {
    return chalk.magenta.bold.underline(str);
}

export const subtitle = (str: string): string => {
    return chalk.whiteBright.bold(str);
}