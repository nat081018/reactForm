import React from "react";
import "./time.scss";

const INTERVAL = 100;

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <p>Таймер:</p>
        <p>
          вывод данных таймера
          <span>{Math.round(value / INTERVAL / 60 / 60)} : </span>
          <span>{Math.round(value / INTERVAL / 60)} : </span>
          <span>{Math.round(value / INTERVAL)} . </span>
          <span>{value % INTERVAL}</span>
        </p>
      </div>
    );
  }
}

export default Time;

// constructor(props) {
//     super(props);
//     this.state = {
//         permissions: [],
//         users: []
//     };
//   }

//    componentDidMount() {
//     fetchPermissions().then(response => {
//       this.setState({
//         permissions: response.permissions
//       });
//     });

//     fetchUsers().then(response => {
//       this.setState({
//         users: response.users
//       });
//     });
//   }
// Объединение неглубокое, поэтому this.setState({users}) оставляет this.state.permissions нетронутым, но полностью заменяет this.state.users.

// Вашим обработчикам событий будут переданы экземпляры SyntheticEvent, который является кросс-браузерной оболочкой вокруг нативного события браузера. Он имеет тот же интерфейс, что и нативное событие браузера, включая методы stopPropagation() и preventDefault(), и имеет отличие в том, что работает одинаково во всех браузерах.

// Если вы обнаружите, что по какой-то причине вам нужно базовое событие браузера, чтобы получить его, просто используйте атрибут nativeEvent. Каждый объект SyntheticEvent имеет следующие атрибуты:

// Код

//   boolean bubbles
//   boolean cancelable
//   DOMEventTarget currentTarget
//   boolean defaultPrevented
//   number eventPhase
//   boolean isTrusted
//   DOMEvent nativeEvent
//   void preventDefault()
//   boolean isDefaultPrevented()
//   void stopPropagation()
//   boolean isPropagationStopped()
//   DOMEventTarget target
//   number timeStamp
//   string type

//
// Когда вы определяете компонент, используя ES6-класс, общий паттерн таков: обработчик события должен быть методом класса. К примеру, наш компонент Conditioner отрисовывает кнопки button, которые позволяют пользователю регулировать текущую температуру:

// Код

class Conditioner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };

    // Привязка необходима, чтобы сделать this доступным в коллбэке
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature + 1
    }));
  }

  onDecrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature - 1
    }));
  }

  render() {
    return (
      <p>
        <h2>Текущая температура: {this.state.temperature}</h2>
        <button onClick={this.onDecrease}>-</button>
        <button onClick={this.onIncrease}>+</button>
      </p>
    );
  }
}

//     Если синтаксис привязки вас раздражает, есть два способа, как это обойти. Первый способ: использовать экспериментальный синтаксис инициализатора свойств, помогающий правильно привязывать коллбэки:

// Код

class Logger extends React.Component {
  //Такой синтаксис гарантирует, что "this" привязан к onLog
  //Внимание! это экспериментальный синтаксис!
  onLog = () => {
    console.log("объект:", this);
  };

  render() {
    return <button onClick={this.onLog}>Лог</button>;
  }
}

// Этот синтаксис разрешен по умолчанию в Create React App.

// Если вы не используете синтаксис инициализатора свойств, есть второй способ: передавать стрелочную функцию-коллбэк как свойство элемента:

// Код;

// class Logger extends React.Component {
//   onLog() {
//     console.log("объект:", this);
//   }

//   render() {
//     //Такой синтаксис гарантирует, что "this" привязан к onLog
//     return <button onClick={e => this.onLog(e)}>Лог</button>;
//   }
// }

// 2.7.1 Передача аргументов в обработчики событий

// Часто внутри цикла обработчику событий нужно передать дополнительный параметр. Например, если id является идентификатором строки, рабочими будут следующие варианты:

// Код

//  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

Функция React.lazy позволяет отрисовывать динамический импорт как обычный компонент.

До:


Код
    
  import OtherComponent from './OtherComponent';
  
  function MyComponent() {
    return (
      <div>
        <OtherComponent />
      </div>
    );
  }
  
После:


Код
    
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <OtherComponent />
      </div>
    );
  }
  

Она автоматически загрузит бандл, содержащий OtherComponent, когда этот компонент будет отрисовываться.

React.lazy принимает функцию, которая должна вызывать динамический импорт: import(). Он должен вернуть Promise, который разрешается в модуль с default экспортом компонента React.

Свойство fallback принимает любые элементы React, которые вы хотите отобразить, ожидая загрузки компонента. Вы можете разместить компонент Suspense в любом месте над ленивым компонентом. Кроме того, Вы даже можете обернуть несколько ленивых компонентов в один Suspense.



Код
    
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
      </div>
        );
  }

3.14.4.1 Приостановка

Если модуль, содержащий OtherComponent, еще не загружен к моменту отрисовки MyComponent, мы должны показать некий резервный контент во время ожидания - например, индикатор загрузки. Это делается с помощью компонента Suspense.



Код
    
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }