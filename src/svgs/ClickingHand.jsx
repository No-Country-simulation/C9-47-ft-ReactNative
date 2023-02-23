import * as React from "react";

const ClickingHand = (props) => (
  <svg
    width={75}
    height={98}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M73.51 34.934c-1.54-4.116-4.222-7.384-8.205-9.383-5.645-2.792-11.25-2.68-16.763.193a2.106 2.106 0 0 1-.41-.638C44.361 9.23 27.18 2.364 13.57 11.46c-1.088.708-1.267.32-1.715-.654C9.171 4.97 4.614 1.47-1.67.36-9.884-.844-18.036 4.233-20.506 12.437c-2.364 7.924 1.806 16.733 9.505 20.147C-5.536 34.986-.36 34.712 4.76 32.01c.143.054.286.108.232.249.036.334.215.723.252 1.058 1.22 4.957 3.725 9.12 7.62 12.209.983.855 1.109 1.384.682 2.505L5.007 70.45c-.213.56-.088 1.09-.926 1.573-1.29-3.059-2.632-5.977-4.064-9.09-1.432-3.112-4.576-4.31-7.466-3.164-2.89 1.145-3.922 4.282-2.633 7.34l7.788 16.925c.984 2.14 2.664 3.743 4.95 4.614 7.144 2.72 14.289 5.442 21.29 8.11 4.43 1.687 8.98.05 10.83-4.379a181.21 181.21 0 0 0 4.59-12.05c.96-2.521.01-5.61-2.472-6.396-2.625-.84-3.358-1.92-3.647-4.598-.379-2.872-2.897-3.992-5.79-4.13 1.154-5.177-.455-7.394-5.83-8.319l2.135-5.604c.374-.98.909-1.098 1.873-1.051 2.214.201 4.445-.072 6.587-.54 3.069-.756 5.923-2.236 8.456-4.159 4.799 11.455 15.923 13.607 23.274 10.63 8.475-3.349 12.623-12.519 9.559-21.227Zm-75.444-3.389c-5.765.531-10.374-1.545-13.879-6.089-.786-.941-.662-1.696.14-2.514 1.462-1.69 3.657-2.297 5.996-1.566l3.858 1.47 3.43 1.305c1.285.49 2.268 1.346 3.001 2.428 1.736 2.746.845 4.654-2.546 4.966Zm6.013-2.041c-.345-5.106-3.49-7.587-7.74-8.886-1.483-.404-2.858-1.088-4.144-1.578-4.001-1.524-6.678-.94-10.066 1.942-1.184-4.623-.547-8.873 2.287-12.446 3.689-4.531 8.435-6.253 14.238-5.165 5.518.978 9.307 4.347 11.241 9.576.358.779.574 1.502-.229 2.32-3.226 3.745-4.738 8.143-4.91 12.89.036.335-.017.475-.124.755 0 0-.053.14-.553.592Zm16.376 31.748c.819-1.292 2.14-1.752 3.604-.873 1.376.684 1.86 1.992 1.326 3.393l-1.708 4.483c-.32.841-.694 1.822.45 2.257.946.522 1.498-.07 1.962-.856.82-1.293 2.193-1.893 3.711-1.154 1.519.74 1.806 2.132 1.219 3.673L29.47 76.24c-.32.84-.248 1.51.752 1.89.858.327 1.303.016 1.767-.77.926-1.573 2.157-2.227 3.908-1.24 1.607.934 1.698 2.413 1.058 4.094l-4.003 10.508c-1.388 3.643-4.278 4.788-7.993 3.373L4.385 86.257c-1.858-.708-3.216-1.867-3.968-3.758-2.363-5.393-4.923-10.7-7.34-15.953-.984-2.14-.54-3.735 1.03-4.42 1.57-.686 3.035.193 4.02 2.333l5.012 10.894c.358.778.716 1.556 1.68 1.603 1.16-.04 1.338-.935 1.605-1.635l5.924-15.552 5.871-15.413c.8-2.101 2.085-2.896 3.657-2.297 1.714.653 2.287 2.155 1.433 4.397l-5.123 13.45c-.374.981-.944 2.048.432 2.732.714.272 1.177-.514 1.837-1.386Zm9.283-13.631c-1.357.125-2.66.11-4.213.32.854-2.241 1.12-4.226-.115-6.14-.733-1.082-1.716-1.938-3.056-2.287-3.053-1.003-5.033.328-7.349 4.26-1.93-1.377-3.36-3.206-4.594-5.12-.555-.692-.288-1.393.069-1.899 1.496-2.639 5.028-4.181 8.082-3.178a162.211 162.211 0 0 1 11.288 4.3c1.714.653 2.68 1.983 3.396 3.54 1.648 3.836.614 5.689-3.509 6.204Zm6.798-2.384c.064-5.752-2.993-9.323-8.53-11.111a48.091 48.091 0 0 1-6.144-2.34c-5.037-2.24-9.463-1.359-13.135 2.697-3.544-7.447.958-18.407 9.361-22.426 9.295-4.642 20.796-.902 25.628 8.319 4.742 9.026 1.436 20.281-7.18 24.86ZM59.22 54.84c-2.428.36-4.731-.037-7.732-1.18-2.143-.816-4.394-2.636-6.236-5.103-.644-.887-.52-1.642.086-2.374 1.462-1.69 3.853-2.383 6.139-1.512l7.287 2.776c1.286.49 2.269 1.346 2.806 2.513 1.735 2.747.898 4.514-2.35 4.88Zm5.924-2.235c-.327-4.296-2.455-6.872-6.223-8.147-1.572-.598-3.054-1.003-4.573-1.741-3.894-1.805-7.66-1.795-11.066 1.56-.304-.918.142-1.23.445-1.596 3.03-3.659 4.578-7.722 4.75-12.47-.019-.809.195-1.37 1.033-1.852 6.278-4.026 15.332-2.021 19.642 4.273 4.453 6.35 2.966 15.41-3.366 19.576-.054.14-.25.225-.642.397Z"
      fill="#C5CEEA"
    />
    <path
      d="M33.75 16.9c-2.663-2.458-7.161-2.246-9.389.595-2.637 3.488-3.578 8.104.175 11.137C28.29 31.666 33.178 30 35.1 24.956c1.478-3.448.992-6.04-1.349-8.055Zm-3.504 10.057c-1.516.546-2.909.336-4.124-.769-1.538-1.548-1.522-3.307-.739-4.934 1.175-3.082 3.387-4.165 5.71-2.96 1.517.74 2.34 2.015 2.092 3.525-.175 2.18-.637 4.25-2.939 5.138ZM1.123 7.2c-2.644-1.65-5.91-.808-7.549 1.776-2.013 3.566-1.419 7.161 1.618 8.639 3.269 1.726 6.462.215 7.903-3.568 1.068-2.802.386-5.308-1.972-6.848Zm-4.31 8.305c-1.571-.599-2.001-2.046-1.254-4.008.8-2.101 2.085-2.896 3.8-2.243 1.57.6 1.948 2.187 1.2 4.148-.8 2.102-2.084 2.896-3.745 2.103ZM62.562 30.603c-2.966-2.092-7.356-.876-8.421 3.21-1.282 3.363-.367 6.117 2.437 7.346 2.608 1.315 5.588.364 7.03-2.135 1.906-3.285 1.545-6.632-1.046-8.42ZM57.967 38.8c-1.715-.653-2.002-2.046-1.201-4.147.747-1.962 2.031-2.756 3.603-2.158 1.572.6 2.145 2.101 1.344 4.203-.89 1.907-2.174 2.701-3.746 2.102Z"
      fill="#C5CEEA"
    />
  </svg>
);

export default ClickingHand;
