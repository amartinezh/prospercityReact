import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Mi from './components/my_prosper/mi';
import Eficientes from './components/eficientes/Eficientes'
import reportWebVitals from './reportWebVitals';
import Calcula from './components/Calcula/calculaComponent';
import Alpha from './components/alpha/Alpha';
import MayusJeison from './components/mayusjeison/MayusJeison';
import { ButtonAlpha } from './components/alpha/ButtonAlpha';
import { ConvertirAMayuscula } from './components/ConvertirAMayuscula/ConvertirAMayuscula';
import {JumpForce} from './components/JumpForce/JumpForce';
import {TeamList} from './components/TeamList/TeamList';
import {TeamItem} from './components/TeamItem/TeamItem';
import { JumpforceValida } from './components/alpha/JumpforceValida/JumpforceValida';

const TeamMembers=[
  {
    memberName: 'Jeison Stiven Lopez Castro',
    gitHubUrl: 'https://github.com/Jeisonlopez259911',
    photoUrl: 'https://drive.google.com/uc?id=1OdCgof7erO9UnBMugD8oE1o_OLJyMx9p'
  }, 
  {
    memberName: 'Santiago Londoño Salgado',
    gitHubUrl: 'https://github.com/Santy149',
    photoUrl: 'https://drive.google.com/uc?id=1Aab9RCtUiQ_kT8Q8z4Lb79mnVtizkCCH'
  }, 
  {
    memberName: 'Carlos Alberto Orozco Ospina',
    gitHubUrl: 'https://github.com/charlie1978',
    photoUrl: 'https://avatars.githubusercontent.com/u/41816057?v=4'
  },
  {
    memberName: 'Juan José Cardona Ramírez',
    gitHubUrl: 'https://github.com/juanirmao',
    photoUrl: 'https://drive.google.com/uc?id=1hE1qK9BOn-4vcJvI1bZlCZh-1YpNYe-d' 
  }, 
  {
    memberName: 'Jhon Alexander Parra Calderon',
    gitHubUrl: 'https://github.com/AlexparraC',
    photoUrl: 'https://drive.google.com/uc?id=1fiKAslCLtRuGeXIXnox2T2tw4f38wLNw'
  },
  {
    memberName: 'Jeremy Alejandro Ramirez Palacio',
    gitHubUrl: 'https://github.com/Jexpalacio11',
    photoUrl: 'https://drive.google.com/uc?id=1XO6TztH086V6aJ3nc4Gdr89UPH-Z5g4c'
  },
  {
    memberName: 'Luis Alfonso Gómez Trujillo',
    gitHubUrl: 'https://github.com/LuisGomezTrujillo',
    photoUrl: 'https://drive.google.com/uc?id=1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze'  
  },  

];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Eficientes />
    <Mi />
    <Calcula />
    <Alpha />
    <ButtonAlpha />   
    <JumpForce />  
    <TeamList>
          {
            TeamMembers.map(TeamMember=>(
              <TeamItem key={TeamMember.memberName} memberName={TeamMember.memberName} gitHubUrl={TeamMember.gitHubUrl} photoUrl={TeamMember.photoUrl}/>
            )
          )};          
    </TeamList>
    <MayusJeison/>
    <ConvertirAMayuscula />
    <JumpforceValida />
  </React.StrictMode>
);

reportWebVitals();
