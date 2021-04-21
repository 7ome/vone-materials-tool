import { useForm } from "react-hook-form";
import download from "./download";
import "../form.css";
import { GetValues } from "../Database/VoneMaterials";
interface profile {
  name?: string;
  inktype?: string;
  expiration?: Date;
  pass_spacing?: Number;
  dispense_height?: Number;
}
interface inkProps {
  inkName: String;
}
const initialTemplate = {
  inktype: "",
  name: "",
  pass_spacing: 0,
  dispense_height: 0,
};
const Form: React.FC<inkProps> = (props) => {
  const values = GetValues(props.inkName).data;
  console.log(values);
  const { handleSubmit, register } = useForm<profile>({
    defaultValues: {
      ...initialTemplate,
    },
  });
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  });

  return (
    <div className="Body">
      <form onSubmit={onSubmit}>
        <div>
          <h3>Details</h3>

          <label htmlFor="inktype">Ink Type</label>
          <input
            name="inktype"
            type="text"
            ref={register({ required: true })}
          />
          <label htmlFor="name"> Name</label>
          <input name="name" type="text" ref={register({ required: true })} />
          <label htmlFor="expiration"> Expiration Date: </label>
          <input
            name="expiration"
            type="date"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <h3>Values</h3>
          <input
            name="pass_spacing"
            type="number"
            step="0.01"
            ref={register({ required: true })}
          />
          <label htmlFor="pass_spacing"> Pass Spacing</label>
          <input
            name="dispense_height"
            type="number"
            step="0.01"
            ref={register({ required: true })}
          />
          <label htmlFor="dispense_height"> Dispense Height</label>

          {/* <input
          name="Anti-stringing-distance"
          type="number"
          ref={register({ required: true })}
        />
        <label htmlFor="Anti-stringing-distance">Anti-stringing distance</label>
        <input name="Kick" type="number" ref={register({ required: true })} />
        <label htmlFor="Kick"> Kick</label>

        <input
          name="Feedrate"
          type="number"
          ref={register({ required: true })}
        />
        <label htmlFor="Feedrate"> Feedrate</label>
        <input
          name="Trimlength"
          type="number"
          ref={register({ required: true })}
        />
        <label htmlFor="Trimlength">Trim lenth</label> */}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
