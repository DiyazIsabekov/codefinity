import React from 'react';
import s from './Partners.module.scss'
import rsk from '../../assets/images/RSK_Bank_Logo.png'
import mbank from '../../assets/images/mbank_logo.png'
import kicb from '../../assets/images/kicb_logo.png'
import bakai from '../../assets/images/Bakai_bank_logo.png'
import bankazii from '../../assets/images/bankazii_logo.png'
import finca from '../../assets/images/finca_logo.png'
import umai from '../../assets/images/umai_logo.png'
import ipc from '../../assets/images/ipc_logo.png'

const Partners = () => {
  return (
    <div>
      <a name="partners"></a>
      <h2>Партнеры</h2>
      <div className={s.partners_wrapper}>
        <div className={s.column}>
          <img src={rsk} alt="logo" width={218} height={73} />
          <img src={mbank} alt="logo" width={224} height={54} />
          <img src={kicb} alt="logo" width={190} height={77} />
        </div>
        <div className={s.column}>
          <img src={bakai} alt="logo" width={363} height={76} />
          <img src={bankazii} alt="logo" width={284} height={77} />
          <img src={finca} alt="logo" width={318} height={76} />
        </div>
        <div className={s.column}>
          <img src={umai} alt="logo" width={178} height={67} />
          <img src={ipc} alt="logo" width={197} height={66} />
        </div>


      </div>
    </div>
  );
};

export default Partners;