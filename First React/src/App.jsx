// import { EventProps } from "./components/EventProps";
// import {NetflixSeries} from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { CleanUp } from "./components/hooks/UseEffect/CleanUp"
// import { HowNotToFetchApi } from "./components/hooks/UseEffect/HowNotToFetchApi"
// import { UseRef } from "./components/hooks/useRefs"
// import { Challenge } from "./components/hooks/UseEffect/EffectChallenge"
// import { ReactUseEffect } from "./components/hooks/UseEffect/Index"
// import { ContactForm } from "./components/hooks/useState/ContactForm"
// import { LoginForm } from "./components/hooks/useState/LoginForm"
// import { EventProagation } from "./components/EventPropagation"
// import { DericedState } from "./components/DericedState"
// import { LiftingState } from "./components/LiftStateUp"
// import {ToggleSwitch} from "./projects/ToggleSwitch/ToggleSwitch";
// import { Todo } from "./projects/Todo/Todo"
// import { CounterChallenge } from './components/hooks/useState/Challenge';
// import { RegistrationForm } from './components/hooks/useState/Registration';
// import { RegistrationFormReact } from './components/hooks/useState/RegistrationReact';
// import { CounterChallenge } from './components/hooks/useState/Challenge';
// import ShortCircuitExample from './components/SortCircuit';
// import {Keys} from './keys';
// import { State } from "./components/hooks/State"

import UseCallback from "./components/hooks/Memo/UseCollback"

// import MemoParentComponent from "./components/hooks/Memo/UseMemo"


// import { About } from "./components/hooks/ContextAPI/About"
// import { Home } from "./components/hooks/ContextAPI/Home"
// import { BioProvider } from "./components/hooks/ContextAPI/Index"
// import { Services } from "./components/hooks/ContextAPI/Services"
// import { DArkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLIght"
// import { ReactMemo } from "./components/hooks/Memo/ReactMemo"
// import { ReducerComp } from "./components/hooks/UseReducer"
// import TodoList from "./components/hooks/UseReducer/ToDo"
// import { UseID } from "./components/hooks/UseID"
// import { ParenComponent } from "./components/PropDrilling"
// import { ForwardRef } from "./components/hooks/useRefs/ForwardRef"

export const App = () => {
  return (
    //   <section className="container">
    //     <h1 className="card-heading ">Lists of Best Netflix Series</h1>
    //   <NetflixSeries />
    // </section>
    <>
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <EventProagation /> */}
      {/* <State /> */}
      {/* <Sibling /> */}
      {/* <DericedState /> */}
      {/* <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      {/* <Keys /> */}
      {/* <ShortCircuitExample /> */}
      {/* <Counter /> */}
      {/* <CounterChallenge /> */}
      {/* <RegistrationForm /> */}
      {/* <RegistrationFormReact /> */}
      {/* <LoginForm /> */}
      {/* <ContactForm /> */}
      {/* <ReactUseEffect /> */}
      {/* <Challenge /> */}
      {/* <CleanUp /> */}
      {/* <HowNotToFetchApi /> */}
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <UseID /> */}
      {/* <ParenComponent /> */}

      {/* <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider> */}
      {/* <Services /> */}
      {/* Must be inside the provider to accessing the values of Context-Component */}

      {/* <ThemeProvider>
        <DArkLight />
      </ThemeProvider> */}

      {/* <ReducerComp /> */}
      {/* <ReactMemo /> */}
      {/* <MemoParentComponent /> */}
      <UseCallback />
    </>
  )

  // return <Profile />

}


// function Sibling(){
//   console.log('Sibling Component Rendered')
//   return (
//       <div className="main-div">
//           <h2 className="text-3xl font-bold">Sibling Component</h2>
//       </div>
//   );
// }
