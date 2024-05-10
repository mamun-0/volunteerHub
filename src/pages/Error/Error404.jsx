import "./Error404.css";
export function Error404() {
  return (
    <div className="height-100vh relative">
      <div className="height-50 bg-sky"></div>
      <div className="flex absolute place-center">
        <img src="/images/text404.png" alt="" />
        <img src="/images/cat404.png" alt="" />
      </div>
      <div className="height-50 bg-desert"></div>
    </div>
  );
}
