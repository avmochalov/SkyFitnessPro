/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import S from "./SelectWorkout.module.css";
import added from "../../img/profile/added.svg";
import cross from "../../img/profile/cross.svg";

function SelectWorkout({setIsTrainingOpen}) {
  return (
    <div className={S.sw_window}>
      <div className={S.sw_header}>
      <img className={S.cross} src={cross} alt="cross" onClick={()=> setIsTrainingOpen(false)}/>
      <p className={S.sw_window__header}>Выберите тренировку</p>
      </div>
      <div className={S.items_list}>
        <div className={S.item_clicked}>
          <div className={S.check_box}>
            <p className={S.item__header_clicked}>Утренняя практика</p>{" "}
            <img src={added} alt="" className={S.item_svg} />
          </div>
          <p className={S.item__text_clicked}>Йога на каждый день / 1 день</p>
        </div>
        <div className={S.item_clicked}>
          <p className={S.item__header_clicked}>Утренняя практика</p>{" "}
          <p className={S.item__text_clicked}>Красота и здоровье</p>
        </div>
        <div className={S.item}>
          <p className={S.item__header}>Ассаны стоя</p>{" "}
          <p className={S.item__text}>Йога на каждый день / 3 день</p>
        </div>
        <div className={S.item}>
          <p className={S.item__header}>
            Растягиваем <br />
            мышцы бедра
          </p>{" "}
          <p className={S.item__text}>Йога на каждый день / 4 день</p>
        </div>
        <div className={S.item}>
          <p className={S.item__header}>Гибкость спины</p>{" "}
          <p className={S.item__text}>Йога на каждый день / 5 день</p>
        </div>
      </div>
    </div>
  );
}

export default SelectWorkout;
