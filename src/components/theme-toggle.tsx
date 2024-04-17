const ToggleButton = () => {
  return (
    <>
      <input
        className="react-toggle-checkbox"
        id="react-toggle"
        type="checkbox"
      />
      <label className="react-toggle-label" htmlFor="react-toggle">
        <span className="react-toggle-button" />
      </label>
    </>
  );
};
