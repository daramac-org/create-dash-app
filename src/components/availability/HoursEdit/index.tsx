import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";

// Components
import { EditDay } from "./EditDay";
import { ConfirmationModal } from "../../modals/ConfirmationModal";
import { Button } from "../../common/Button";
import { Loading } from "../../common/Loading";

//Types
import { Day } from "../../../../types/common";

// Utils
import { daysInWeek } from "../../../utils/time";

// Constants
import { UNSAVED_CHANGES } from "../../../constants/modals";

// Icons
import { RiCloseFill } from "react-icons/ri";

export const HoursEdit = observer(() => {
  const { hoursView, modalView } = useStore();
  const { modalOpen, handleCloseModal } = modalView;
  const days = daysInWeek();

  const {
    handleCloseEditingReset,
    handleCloseEditing,
    handleValidateChanges,
    handleFilterShifts,
    shiftsLoading,
    userInfo,
  } = hoursView;

  const { firstName, lastName } = userInfo;

  if (!hoursView.weekStart || !hoursView.weekEnd) return <></>;

  return (
    <>
      {shiftsLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col lg:mx-24 mx-5 my-12 mb-28 gap-11">
          <div className="flex flex-row items-center justify-between gap-5">
            <div className="cursor-pointer" onClick={handleCloseEditing}>
              <RiCloseFill className="text-4xl" />
            </div>
            <span className="font-button text-2xl">
              Edit Shifts for{" "}
              <span className="font-bold">
                {firstName} {lastName}
              </span>
            </span>
            <Button onClick={handleValidateChanges} type="submit">
              Save
            </Button>
          </div>
          <div className="flex flex-col basis-auto items-center gap-5">
            {days.map((day: Day) => (
              <EditDay
                key={day.number}
                day={day}
                shifts={handleFilterShifts(day.number)}
              />
            ))}
          </div>
        </div>
      )}
      {modalOpen && (
        <ConfirmationModal
          title={UNSAVED_CHANGES}
          message="Are you sure you want to cancel editing shifts?"
          onCancel={handleCloseModal}
          onSubmit={handleCloseEditingReset}
          cancelText="NO"
          submitText="YES"
          buttonReverse
        />
      )}
    </>
  );
});