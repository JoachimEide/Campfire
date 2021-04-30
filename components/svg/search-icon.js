export default function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      focusable="true"
      className="SearchIcon"
    >
      <defs>
        <style>
          {
            ".SearchIcon {fill: #fff; height: 20px;} .SearchIcon:hover {fill: #e59740; stroke: #e59740; transition: all 0.2s ease-in-out;}"
          }
        </style>
      </defs>
      <path
        id="search_icon"
        data-name="search icon"
        d="M27.658,26.011,19.7,18.049a11.1,11.1,0,1,0-1.65,1.65l7.963,7.962a1.166,1.166,0,1,0,1.65-1.65ZM11.083,19.836a8.75,8.75,0,1,1,8.75-8.75A8.759,8.759,0,0,1,11.083,19.836Z"
        transform="translate(0 -0.003)"
      />
    </svg>
  );
}
