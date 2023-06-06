import { FC } from "react";

type FormValues = {
  email: string;
  username: string;
  comment: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const FeedbackForm: FC<Props> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const formValues = Object.fromEntries(formData.entries()) as FormValues;

        onSubmit(formValues);
      }}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="username">Your name:</label>
        <input type="text" name="text" id="username" />
      </div>
      <div>
        <label htmlFor="comment">Your comment:</label>
        <textarea name="comment" id="comment" cols={30} rows={10}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
