import { AddPetBtn } from "./AddPetButton.styled";

function AddPetButton() {
  return (
    <div>
      <AddPetBtn>
        Add pet
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 7V17M7 12L17 12"
            stroke="#FEF9F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </AddPetBtn>
    </div>
  );
}

export default AddPetButton;
