export const FacebookIcon = ({
  width,
  height,
}: {
  width: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.477 2 2 6.505 2 12.061c0 5.02 3.657 9.184 8.438 9.938v-7.03h-2.54V12.06h2.54V9.846c0-2.523 1.492-3.915 3.776-3.915 1.095 0 2.239.197 2.239.197v2.477h-1.261c-1.242 0-1.63.775-1.63 1.57v1.888h2.774l-.443 2.908h-2.331V22C18.343 21.245 22 17.082 22 12.062c0-5.557-4.477-10.063-10-10.063"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};
