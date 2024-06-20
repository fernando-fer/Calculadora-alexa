/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Binvenido ala calculadora de Alvaro?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const handleSumaInput = {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Sumaintent'
  },
  handle(handlerInput){
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value
    const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value
    var numero1 = Number(cantidad)
    var numero2 = Number(cantidadd)
    if (isNaN(numero1) || isNaN(numero2)){
      return handlerInput.responseBuilder
        .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
        .getResponse()
    }
    let resultado = numero1 + numero2
    const speakOutput =  `El resultado es ${resultado}`
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}


const handleRestaInput = {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaInput'
  },
  handle(handlerInput){
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value
    const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value
    var numero1 = Number(cantidad)
    var numero2 = Number(cantidadd)
    if (isNaN(numero1) || isNaN(numero2)){
      return handlerInput.responseBuilder
        .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
        .getResponse()
    }
    let resultado = numero1 - numero2
    const speakOutput = `El resultado es ${resultado}`
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

const handleMultiplicacionInput = {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionInput'
  },
  handle(handlerInput){
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value
    const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value
    var numero1 = Number(cantidad)
    var numero2 = Number(cantidadd)
    if (isNaN(numero1) || isNaN(numero2)){
      return handlerInput.responseBuilder
        .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
        .getResponse()
    }
    let resultado = numero1 * numero2
    const speakOutput = `El resultado es ${resultado}`
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

const handleDivisionInput = {
  canHandle(handlerInput){
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionInput'
  },
  handle(handlerInput){
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value
    const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value
    var numero1 = Number(cantidad)
    var numero2 = Number(cantidadd)
    if (isNaN(numero1) || isNaN(numero2)){
      return handlerInput.responseBuilder
        .speak("Lo siento, no pude entender los números. Por favor, intente de nuevo")
        .getResponse()
    }
    if (numero2 === 0) {
      return handlerInput.responseBuilder
        .speak("Lo siento, no puedo dividir por cero. Por favor, intente con otro número")
        .getResponse()
    }
    let resultado = numero1 / numero2
    const speakOutput = `El resultado es ${resultado}`
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

const RaizCuadradaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RaizCuadradaIntent';
  },
  handle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    const numero = parseFloat(request.intent.slots.numero.value);
    

    const resultado = Math.sqrt(numero);

    const speechText = `La raíz cuadrada de ${numero} es ${resultado}.`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const ModuloIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'ModuloIntent'
    );
  },
  handle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    const dividendo = parseFloat(request.intent.slots.dividendo.value);
    const divisor = parseFloat(request.intent.slots.divisor.value);

   
    if (divisor === 0) {
      const speechText = "No se puede dividir por cero. Por favor, ingresa un divisor válido.";
      return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    }

    const resultado = dividendo % divisor;

    const speechText = `El módulo de ${dividendo} dividido por ${divisor} es ${resultado}.`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};




const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        handleSumaInput,
        handleRestaInput,
        handleMultiplicacionInput,
        handleDivisionInput ,
        RaizCuadradaIntentHandler,
        ModuloIntentHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
