export class StringUtils {
    public static getSingularOrPlural(
        count: number,
        singular: string,
        plural: string
    ): string {
        return count === 1 ? singular : plural
    }
}
