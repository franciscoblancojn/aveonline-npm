# Aveonline

Libreria para conectarce con Aveonline através de js.

## Instalación

Para instalar Aveonline use el siguiente comando:

```
npm i aveonline
```

## Uso

Para usar Aveonline Importelo de la siguiente manera:

```ts
import { Aveonline, AveonlineConfig } from 'aveonline';
```

## Configuración

Una vez importado Ave, puedes configurarlo de la siguiente manera:

```ts
const  config : AveonlineConfig = {
    active: boolean;
    user: string;
    password: string;
    nit: string;s
    direction: string;
    phone: string;
    tel: string;
    email: string;
    account: {
        id: number;
        name: string;
    } | null;
    agent: {
        id: number;
        name: string;
    } | null;
    val_min: boolean;
    free_shipping: boolean;
    min_free_shipping: number;
    fixed_freight: number;
}
const ave = Aveonline({config})
```

## Funciones

### getAccounts

Obtener las Cuentas en base a las configuaciones

```ts
const accounts = await ave.getAccounts() : AccountResultProps
```

### getAgents

Obtener los Agentes en base a las configuaciones

```ts
const agents = await ave.getAgents() : AgentsResultProps
```

### getTransport

Obtener las Transportadoras en base a las configuaciones

```ts
const transports = await ave.getTransport() : TransportResultProps
```

### getQuote

Generar Cotizacione en base a las configuaciones y los dato de envio

```ts
const cotizaciones = await ave.getQuote(data: GetQuoteParams) : QuoteResultProps
```

### generateGuide

Generar Guia en base a las configuaciones y los dato de envio

```ts
const guia = await ave.generateGuide(data: PostGuideParams) : GuideResultProps
```

### generatePickup

Generar Recogidas en base a las configuaciones y los dato de envio

```ts
const recogidas = await ave.generatePickup(data: PostPickupParams) : GuideResultProps
```

### updateGuide

Actualizar guia en base a las configuaciones y los dato de envio

```ts
const result = await ave.updateGuide(data: PutGuideParams) : any
```

### generateShippingRelationship

Generar relacion de Envio en base a las configuaciones y los dato de envio

```ts
const result = await ave.generateShippingRelationship(data: PostShippingRelationshipParams) : any
```
