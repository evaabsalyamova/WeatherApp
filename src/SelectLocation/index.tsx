import "./styles.css";

const SelectLocation = () => {
  return (
    <select className="selectOption" name="action">
      <option value=""></option>
      <option value="Yerevan">Yerevan</option>
      <option value="Tbilisi">Tbilisi</option>
    </select>
  );
};

export default SelectLocation;
