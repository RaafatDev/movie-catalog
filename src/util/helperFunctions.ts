export const getImagePath = (firstOption: string, secondOption: string) => {
    return firstOption !== "no_image"
        ? firstOption
        : // ######
        secondOption !== "no_image"
        ? secondOption
        : `${process.env.PUBLIC_URL}/img/no_image.png`;
};
