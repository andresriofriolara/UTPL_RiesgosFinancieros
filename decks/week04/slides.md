<style>
  .hrow-3{
    height:100%;
    display:flex;
    align-items:center;          /* vertical centering */
    justify-content:space-between;
    gap:2rem;
    padding:0 2rem;
  }
  .hrow-3 .cell{
    flex:1 1 0;                  /* equal-width columns */
    display:flex;
    justify-content:center;      /* center each image inside its cell */
  }
  .hrow-3 img{
    max-height:60vh;             /* uniform heights fit on slide */
    max-width:30vw;              /* prevents overflow in narrow screens */
    width:auto;
    height:auto;
    object-fit:contain;
    display:block;
  }
</style>

<style>
  /* Tiny equation helper that works with KaTeX or MathJax */
  .eq-xs .katex-display,
  .eq-xs .katex { font-size: 0.58em !important; line-height: 1.1; }
  .eq-xs .MathJax, 
  .eq-xs .mjx-chtml { font-size: 0.58em !important; line-height: 1.1; }
  /* keep it from overflowing horizontally */
  .eq-xs { overflow-x: auto; }
</style>


<section class="title-slide">
Semana 4 | Riesgo de Interés y de Liquidez
<div class="subtitle">Ingeniería Financiera y Administración de Riesgos Financieros • <em>Octubre 30, 2025</em></div>
</section>

---

## Agenda
1. Sobre la Semana Anterior
2. Contenido Semana 4

---

## Sobre la Semana Anterior
- **3.1 Riesgo de crédito: Elementos Clave**
- **3.2 Medición del riesgo de crédito**
- **3.3 Ratings financieross**
- **3.4 Cobertura de riesgos de crédito mediante instrumentos financieros**


---

## Semana 4

Riesgo de Interés y de Liquidez

---

# Semana 4: 
Riesgo de interés y liquidez

- **4.1 Gestión de la liquidez**
- **4.2 Riesgo de interés**
- **4.3 Cobertura de riesgos de interés mediante instrumentos financieros**

---

## 4.1 Gestión de la liquidez

### ¿Qué es el riesgo de liquidez?

- Definición: posibilidad de **no cumplir obligaciones de caja** a tiempo **sin pérdidas inaceptables**.
- Dos manifestaciones: **liquidez de fondeo** (renovar pasivos/captar) y **liquidez de mercado** (vender activos sin descuentos severos).
- Brecha de liquidez a horizonte $h$:  
  $
  \text{Gap}_h=\text{Entradas}_h-\text{Salidas}_h+\text{Activos Líquidos de Alta Calidad (High-Quality Liquid Assets, HQLA)}_h
  $

--

## Indicadores clave de liquidez

- **Índice de Cobertura de Liquidez (Liquidity Coverage Ratio, LCR)**:  
  $\text{LCR}=\frac{\text{Activos Líquidos de Alta Calidad (HQLA)}}{\text{Salidas netas a 30 días}}\ge 100\%$
- **Índice de Fondeo Estable Neto (Net Stable Funding Ratio, NSFR)**:  
  $\text{NSFR}=\frac{\text{Fondeo Estable Disponible (Available Stable Funding, ASF)}}{\text{Fondeo Estable Requerido (Required Stable Funding, RSF)}}\ge 100\%$
- Complemento: análisis de **brechas por vencimiento** en “buckets”.

--

## Buffers y fuentes de liquidez

- **Activos Líquidos de Alta Calidad (HQLA)** nivel 1 y 2 como colchón primario.
- **Líneas contingentes**, **facilidades del banco central**, **mercados repo**; gestión **intradía** con colateral segregado.
- Principio operativo: priorizar activos de **baja volatilidad** y **alta profundidad**.

--

## Pruebas de estrés de liquidez

- Escenarios **idiosincráticos** y **sistémicos**: supuestos de **run-off** de depósitos, **haircuts** y **cierres de mercado**.
- Superávit diario \(t\) a 30 días:  
-  $\text{Superávit}_t=\text{Entradas}_t-\text{Salidas}_t+\text{Ventas HQLA}_t-\text{Haircuts}_t$
- Objetivo: $(\min_t \text{Superávit}_t \ge 0)$ y límites/activadores coherentes.

--

## Gobernanza y Plan de Contingencia

- **Comité de Activos y Pasivos (ALCO)**: apetito, límites, métricas y escalamiento.
- **Plan de Contingencia de Liquidez (Contingency Funding Plan, CFP)**: fuentes a activar, orden de uso, comunicación interna/externa, pruebas periódicas.
- Principio: minimizar el **costo esperado** sujeto a cumplimiento de obligaciones.

---

## 4.2 Riesgo de interés

### Riesgo de tasa — conceptos base

- **Estructura temporal de tasas**: curva spot \(y(\tau)\); shocks **paralelos**, de **inclinación** y de **curvatura**.
- Dos lentes: **Ingreso Neto por Intereses (NII)** (1–2 años) y **Valor Económico del Patrimonio (EVE)** (descuento de flujos).

--

- Sensibilidad elemental:  
  $$
  \frac{dP}{dy}=-D_{\text{mod}}\,P,\quad \frac{d^2P}{dy^2}=C\,P
  $$

--

## NII vs EVE: cuándo usar cada uno

- **Ingreso Neto por Intereses (NII)** (corto plazo):  
  $$
  \Delta \text{NII}\approx \sum_i \Delta r_i \cdot \text{Volumen}_i^{\text{repricing}} - \sum_j \Delta r_j \cdot \text{Volumen}_j^{\text{repricing}}
  $$

--

- **Valor Económico del Patrimonio (EVE)** (largo plazo):  
  $$
  \frac{\Delta \text{EVE}}{\text{EVE}}\approx -D_{\text{equiv}}\,\Delta y+\tfrac{1}{2}C_{\text{equiv}}(\Delta y)^2
  $$
  con agregación por valor presente de activos y pasivos.

--

## Duración de Macaulay y Modificada

- Precio: $P=\sum_t \dfrac{CF_t}{(1+y)^t}$.
- **Duración de Macaulay**:  
  $$
  D_M=\frac{\sum_t t\,\dfrac{CF_t}{(1+y)^t}}{P}
  $$

--

- **Duración Modificada**:  
  $$
  D_{\text{mod}}=\frac{D_M}{1+y}
  $$
- Aproximación: \(\dfrac{\Delta P}{P}\approx -D_{\text{mod}}\,\Delta y\) válida para shocks pequeños y sin opcionalidades.

--

## Convexidad

- Definición:  
  $$
  C=\frac{1}{P}\sum_t \frac{CF_t\,t(t+1)}{(1+y)^{t+2}}
  $$

--

- Ajuste de segundo orden:  
  $$
  \frac{\Delta P}{P}\approx -D_{\text{mod}}\,\Delta y+\tfrac{1}{2}C(\Delta y)^2
  $$
- Intuición: mayor **convexidad** reduce pérdidas cuando suben tasas y amplifica ganancias cuando bajan.

--

## Duración efectiva con opcionalidades

- Con **prepago**, **opción de rescate (call)** o **depósitos sin vencimiento**, usar **Duración Efectiva**:  
  $D_{\text{ef}}=\frac{P(y-\Delta y)-P(y+\Delta y)}{2\,P(y)\,\Delta y}$
- Dependencias: nivel de tasas y **comportamiento del cliente** (elasticidad de depósitos).

--

## Medición de brechas de repricing

- Enfoque por “buckets” de **repricing** de activos y pasivos.
- Sensibilidad de **Ingreso Neto por Intereses (NII)** a shock paralelo:  
  $\Delta \text{NII}\approx \Delta y \cdot \Big(\sum_{i}\text{Vol}_i\cdot \beta_i - \sum_{j}\text{Vol}_j\cdot \beta_j\Big)$
  donde $\beta$ es la **transmisión** de la tasa de mercado a la tasa efectiva.

--

## Riesgos prácticos y de modelo

- **Riesgo de base (basis)**: descalces entre curvas de referencia y fijaciones.
- **Riesgo conductual**: elasticidades de depósitos, prepago.
- **Riesgo de modelo**: supuestos de duración efectiva, mapeo de productos.
- Práctica robusta: validación periódica y **backtesting** de NII y EVE.

---

## 4.3 Cobertura de riesgos de interés

--

### Estrategias de cobertura: panorama

- Objetivos: **estabilizar Ingreso Neto por Intereses (NII)** o **proteger Valor Económico del Patrimonio (EVE)**.
- Política: objetivos medibles (p. ej., límite a $\Delta$ EVE bajo +200 pb), instrumentos permitidos, límites de **riesgo de base (basis)**.
- Métrica de eficiencia: reducción de sensibilidad neta vs **costo** y **complejidad**.

--

## Swaps de tasas de interés (Interest Rate Swap, IRS)

- **Swap de tasas de interés (IRS)**: intercambio de flujos **fijo–variable** sobre nocional \(N\).
- Para cartera “larga duración”, **pagar fijo y recibir variable** reduce la duración neta.

--

- Sensibilidad (aprox.):  
  $$
  \frac{\Delta P_{\text{IRS}}}{N}\approx -D_{\text{IRS}}\,\Delta y
  $$
  con \(D_{\text{IRS}}\) dependiente de cupones fijos y **resets** del tramo variable.

--

## Futuros y Acuerdos de Tasas a Futuro (Forward Rate Agreement, FRA)

- **Futuros** (p. ej., sobre bonos del Tesoro) y **Acuerdos de Tasas a Futuro (FRA)** fijan hoy tasas futuras.
- Uso: coberturas tácticas de **repricing** para estabilizar **Ingreso Neto por Intereses (NII)**.

--

- Dimensionamiento con **DV01** (cambio de precio por 1 pb):  
  $$
  N_{\text{fut}}\approx \frac{\Delta \text{EVE objetivo}}{\text{DV01}_{\text{bono \,CTD}}\cdot \text{Factor de conversión}}
  $$
  donde **Cheapest To Deliver (CTD)** es el bono “más barato para entregar”.

--

## Opciones de tasas: techo (cap), piso (floor) y collar

- **Techo (cap)** limita subida de tasas en pasivos a tasa variable; **piso (floor)** asegura rendimiento mínimo; **collar** combina ambos reduciendo prima.
- Beneficio: protección **asimétrica** (mantiene upside si bajan tasas).

--

- Efecto sobre duración **no lineal** (delta y gamma):  
  $D_{\text{ef, cubierto}}\approx D_{\text{base}}+\Delta_{\text{opción}}\cdot D_{\text{subyacente}}+\text{término de gamma}$

--

## Posicionamiento y estructura temporal

- **Barbell** (vencimientos cortos y largos) vs **bullet** (concentración en el centro).
- Respuesta a inclinación/curvatura:  
  $$
  \frac{\Delta P}{P}\approx \sum_k \big(-D_k\,\Delta y_k\big)+\tfrac{1}{2}\sum_k C_k(\Delta y_k)^2
  $$
- Elección según expectativa de curva (empinamiento, aplanamiento).

--

## Dimensionamiento del hedge por duración

- Objetivo: llevar la duración de la cartera \(D_P\) a un objetivo \(D^*\) usando instrumento \(H\) con duración \(D_H\) y precio \(P_H\).
- Nocional aproximado:  
  $$
  N_H\approx \frac{(D^*-D_P)\,P_P}{D_H\,P_H}
  $$

--

- En términos de **DV01**:  
  $$
  N_H\approx \frac{\text{DV01 objetivo}-\text{DV01 cartera}}{\text{DV01 del hedge}}
  $$
- Ajustar por **riesgo de base (basis)** y desalineamientos de **repricing**.

--

## Caso corto de inmunización

- Portafolio valor \(P_P\), duración \(D_P=5.0\), objetivo \(D^*=3.0\).
- Usar **Swap de tasas de interés (IRS)** con \(D_H\approx 4.5\), \(P_H\approx 1\).

--

- Nocional:  
  $N_{\text{IRS}}\approx \frac{(3.0-5.0)P_P}{4.5\cdot 1}=-\frac{2}{4.5}P_P\ \approx\ -0.444\,P_P$
  Signo negativo: posición **pagar fijo** para reducir duración “larga”.
- Verificar **convexidad residual** y **riesgo de base (basis)**; si el objetivo fuera **NII**, mapear **repricing** y **resets**.


---

## Dudas y Preguntas