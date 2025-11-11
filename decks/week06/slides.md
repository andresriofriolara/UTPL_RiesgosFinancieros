<section class="title-slide">
Semana 6 | Riesgo de Mercado (Cont.)
<div class="subtitle">Ingeniería Financiera y Administración de Riesgos Financieros • <em>Noviembre 11, 2025</em></div>
</section>

---

## Agenda
1. Sobre la Semana Anterior
2. Contenido Semana 6

---

## Sobre la Semana Anterior
- **5.1 Fundamentos de medición**
- **5.2 Duración efectiva y curva de tasas**
- **5.3 Cobertura con futuros y swaps**
- **5.4 Puente a ALM y ejemplos**


---

## Semana 6

Riesgo de Mercado (Cont.)

--

# Semana 6: 
Riesgo Mercado (Cont.)

- **6.1 Medición de la exposición cambiaria**
- **6.2 Paridad cubierta y precios a término**
- **6.3 Coberturas**
- **6.4 Oeprativa, riesgos y contabilidad**

---
<!-- .slide: data-background-color="transparent" -->
## 6.1.1 Medición de la exposición cambiaria — Taxonomía
- Tres formas de exposición:
  - **Transacción (TX)**: flujos contractuales en moneda extranjera con monto y fecha.
  - **Traducción (TRAD)**: conversión contable de estados financieros a moneda de reporte.

--

  - **Económica (ECO)**: sensibilidad de ventas, costos o márgenes al tipo de cambio.
- Tipo de cambio: $x_t$ (precio de 1 unidad de moneda extranjera en moneda doméstica).

--
<!-- .slide: data-background-color="transparent" -->
## 6.1.2 Medición de la exposición cambiaria — TX
- Construir **calendario de flujos** por moneda: $(T_i, Q_i, \text{signo})$.
- Exposición de transacción neta a $T$: suma de nocionales equivalentes en moneda de reporte.
- Valor doméstico de un cobro $Q$ en $T$: $Q \cdot x_T$.
- Decisión de cobertura basada en nocional, horizonte y distribución temporal.

--
<!-- .slide: data-background-color="transparent" -->
## 6.1.3 Medición de la exposición cambiaria — TRAD
- Activos/pasivos monetarios a **tipo de cambio de cierre**; ingresos/gastos a tipos promedio (según política).
- Impacto en métricas y **covenants** (p. ej., deuda/EBITDA) aun sin flujo de caja.
- Medición: reexpresar estados bajo escenarios alternativos de tipo de cambio de cierre.

--
<!-- .slide: data-background-color="transparent" -->
## 6.1.4 Medición de la exposición cambiaria — ECO
- Estimar **beta cambiaria** de márgenes/EBITDA vía regresión:
  - $\Delta \ln(\text{Margen}) = \alpha + \beta\,\Delta \ln(x_t) + \Gamma\mathbf{Z}_t + \varepsilon_t$.
- Usar $\beta$ para traducir escenarios de $x_t$ a variaciones esperadas de resultado.
- Coberturas parciales orientadas a estabilizar márgenes (no necesariamente nocional pleno).

--
<!-- .slide: data-background-color="transparent" -->
## 6.1.5 Medición de la exposición cambiaria — P&L sin cobertura
- Exportador con cobro $Q$ en $T$: valor doméstico $Q\,x_T$.
- **P&L no cubierto** relativo a spot $x_0$: $Q\,(x_T - x_0)$.
- Riesgo central: variabilidad de $x_T$ vs. planificación de caja y márgenes.

---
<!-- .slide: data-background-color="transparent" -->
## 6.2.1 Paridad cubierta y precios a término — Notación
- **Spot** actual: $x_0$.
- **Forward** a $T$: $F_{0,T}$.
- Tasas: $r_d$ (doméstica) y $r_f$ (extranjera), composición continua salvo indicación.
- Objetivo: derivar precio forward teórico (**no arbitraje**) y leer **puntos forward**.

--
<!-- .slide: data-background-color="transparent" -->
## 6.2.2 Paridad cubierta de intereses (CIP) — Fórmula base
- **CIP** (*Covered Interest Parity*): igualdad de retornos con cobertura a término.
- Con composición continua:
  $$
  F_{0,T} = x_0\ e^{(r_d - r_f)T}.
  $$

--

- Con interés simple:
  $$
  F_{0,T} = x_0\ \frac{1 + r_d T}{1 + r_f T}.
  $$
- Impide **arbitraje cubierto** entre monedas.

--
<!-- .slide: data-background-color="transparent" -->
## 6.2.3 Forward points y pips (definidos aquí)
- **Puntos forward**: $F_{0,T} - x_0$.
- **Pip** (*percentage in point*): paso mínimo típico; para pares mayoritarios 1 pip = $10^{-4}$.
- Lectura económica: puntos forward reflejan diferencial de tasas $r_d - r_f$ ⇒ **descuento/prima** a término.

--
<!-- .slide: data-background-color="transparent" -->
## 6.2.4 Réplica de CIP — Intuición
- Estrategia A: invertir 1 en doméstica a $r_d$.
- Estrategia B: convertir a extranjera a $x_0$, invertir a $r_f$, y cubrir con forward a $F_{0,T}$.
- Igualdad de retornos en $T4 ⇒ exige $F_{0,T}$ de CIP; si no, **arbitraje**.

---
<!-- .slide: data-background-color="transparent" -->
## 6.2.5 Ejemplo numérico — Cálculo de $F_{0,T}$ y puntos
- Datos: $x_0=1.1000$, $T=0.5$ años, $r_d=3\%$, $r_f=1\%$, comp. continua.
- Cálculo:
  $$
  F_{0,T} = 1.1000 \times e^{(0.03 - 0.01)\cdot 0.5}
          \approx 1.1000 \times e^{0.01}
  $$
  $$
          \approx 1.1111.
  $$
- Puntos forward = $+0.0111$ = **111 pips** ⇒ prima a término.

--

<!-- .slide: data-background-color="transparent" -->
## 6.2.6 P&L con forward — Cobertura directa
- Vender a término $Q$ unidades extranjeras a $F_{0,T}$ fija la conversión.
- **P&L cubierto** relativo a $x_0$:
  $$
  Q(F_{0,T} - x_0).
  $$
- Independiente de $x_T$: elimina incertidumbre de precio de conversión.

--

<!-- .slide: data-background-color="transparent" -->
## 6.2.7 Rollover y costo de carry
- **Rollover**: cerrar forward próximo a vencimiento y abrir uno nuevo más adelante.
- **Carry**: secuencia de puntos forward intertemporales (función de $r_d - r_f$).
- Plan de roll adecuado evita quedar **descubierto** si el calendario real se retrasa.

---
<!-- .slide: data-background-color="transparent" -->
## 6.3.1 Coberturas — Forwards vs. futuros (definidos aquí)
- **Forward (OTC)**: *Over-The-Counter*, bilateral, sin liquidación diaria; ajuste fino de nocional; riesgo de contraparte.
- **Futuro**: estandarizado, cámara de compensación, **MTM** (*Mark-To-Market*, liquidación diaria) y **márgenes** (inicial/variación).
- Trade-off: forwards (flexibilidad/ajuste) vs. futuros (menor riesgo de contraparte, pero flujos diarios y posible **tracking error**).

--
<!-- .slide: data-background-color="transparent" -->
## 6.3.2 Medición del tracking error (definido aquí)
- **Tracking error**: variabilidad del resultado de la cobertura vs. la exposición “ideal”.
- Fuentes: base contrato/spot, estandarización de vencimientos, MTM y liquidez.
- Medición: comparar series de $\Delta x_t$ del flujo con $\Delta$ del contrato elegido.

--
<!-- .slide: data-background-color="transparent" -->
## 6.3.3 Cross-hedging (cobertura cruzada) y riesgo de base
- Si no existe contrato líquido para la moneda objetivo, usar una **moneda proxy** correlacionada.
- **Riesgo de base**: divergencia entre desempeño del proxy y el del tipo objetivo.
- Efectividad depende de **correlación** y su estabilidad en el tiempo.

--
<!-- .slide: data-background-color="transparent" -->
## 6.3.4 Ratio de cobertura óptimo — Regresión
- Minimiza la varianza del resultado cubierto.
- Estimador por regresión:
  $$
  h^\* = \beta
      = \frac{\operatorname{Cov}(\Delta S,\ \Delta H)}{\operatorname{Var}(\Delta H)},
  $$
  donde $\Delta S$ = cambio del tipo objetivo, $\Delta H$ = cambio del instrumento.

--
- **Reducción de varianza** esperada:
  $$
  \operatorname{Var}_{\text{hedged}} = \operatorname{Var}(\Delta S)\,(1 - \rho^2),
  $$
  con $\rho$ = correlación entre $\Delta S$ y $\Delta H$.

--
<!-- .slide: data-background-color="transparent" -->
## 6.3.5 Ejemplo — Cross-hedging con proxy
- Objetivo: cubrir COP/USD sin contrato líquido; proxy: BRL/USD.
- Estimar $\beta$ de $\Delta$ COP/USD sobre $\Delta$ BRL/USD.
- Nocional del hedge = $\beta \times$ exposición en COP; riesgo residual = parte idiosincrática de COP/USD.

--

<!-- .slide: data-background-color="transparent" -->
## 6.3.6 Layered hedging (por capas)
- Flujos extendidos/fechas inciertas ⇒ fraccionar nocional en **capas** (p. ej., 40% a 3m, 30% a 6m, 30% a 9m).
- Suaviza impacto de errores de calendario y reduce dependencia de un único vencimiento.
- Mayor complejidad operativa y de monitoreo.

--
<!-- .slide: data-background-color="transparent" -->
## 6.3.7 Forwards no entregables (NDF) — Definición
- **NDF** (*Non-Deliverable Forward*): liquidación por diferencias en moneda “dura” (p. ej., USD).
- Al vencimiento: comparar **fixing** oficial vs. precio pactado; liquidar diferencia \(\times\) nocional.
- Útil en monedas con **controles** o poca convertibilidad.

---

<!-- .slide: data-background-color="transparent" -->
## 6.4.1 Operativa, riesgos y contabilidad — VaR/ES residual
- Aplicar **VaR** (*Value at Risk*) y **ES** (*Expected Shortfall*) a la **exposición residual** post-hedge.
- $VaR_\alpha$: pérdida mínima en el $\alpha$% peor; $ES_\alpha$: promedio de pérdidas en ese conjunto.
- Simular escenarios de $x_T$ y del instrumento ⇒ distribución del **P&L neto** y verificación de límites.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.2 Operativa, riesgos y contabilidad — Efectividad
- **Contabilidad de coberturas**: requiere documentación, designación y pruebas de **efectividad**.
- Efectividad: comovimiento entre el elemento cubierto y el instrumento (ex-ante y ex-post).
- Políticas internas para TRAD a fin de moderar volatilidad contable.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.3 Operativa, riesgos y contabilidad — Contraparte y liquidación
- **OTC**: riesgo de contraparte mitigable con **CSA** (*Credit Support Annex*, acuerdos de colateral).
- Riesgo de liquidación (**Herstatt**): pagos en distintas monedas no sincronizados.
- **CLS** (*Continuous Linked Settlement*): liquidación **PvP** (*payment-versus-payment*) para reducir riesgo.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.4 Swaps de divisas y CCS (definidos aquí)
- **Swap de divisas**: intercambio de principal e intereses en dos monedas.
- **CCS** (*Cross-Currency Swap*): piernas fija/flotante en cada moneda; puede incluir **re-exchange** del principal al vencimiento.
- Útil para cubrir simultáneamente **tasa y divisa**, alineando flujos con moneda funcional.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.5 Diseño de cobertura con forward — Procedimiento
- Identificar TX/TRAD/ECO y calendario de flujos.
- Calcular $F_{0,T}$ con CIP; leer **puntos forward**.
- Elegir nocional $Q$ y vencimiento $T$; plan de **rollover**.
- Estimar resultado esperado: $Q\,(F_{0,T} - x_0)$ y métricas de **VaR/ES** residual.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.6 Comparativa — Forward vs. Futuro vs. NDF vs. CCS
- **Forward (OTC)**: ajuste fino, sin MTM; contraparte/CSA.
- **Futuro**: MTM y márgenes; menor contraparte; potencial **tracking error**.
- **NDF**: liquidación por diferencias; útil en mercados con controles.
- **CCS**: casar tasa y divisa; mayor complejidad, pero cobertura integral.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.7 Caso integrado — Exportador 6m y 12m
- Cobros $Q_1$ (6m) y $Q_2$ (12m); spot $x_0$; tasas $r_d, r_f$.
- Forwards teóricos:
  $$
  F_{0,0.5} = x_0 e^{(r_d - r_f)0.5}, \quad
  F_{0,1}   = x_0 e^{(r_d - r_f)1}.
  $$

--

- Plan **por capas**: fijar hoy forwards por $Q_1$ (6m) y $Q_2$ (12m).
- Incertidumbre en $Q_2$: cubrir con $h^\* < 1$ (regresión) y monitoreo de **tracking error**.

--

<!-- .slide: data-background-color="transparent" -->
## 6.4.8 Resumen operativo — Checklist de implementación
- Medir TX/TRAD/ECO y cuantificar $\beta$ cuando aplique.
- Calibrar $F_{0,T}$, puntos forward y plan de **roll**.
- Seleccionar instrumento (forward/futuro/NDF/CCS) y dimensionar con $h^\*$ si procede.
- Simular P&L neto; establecer límites con **VaR/ES** y pruebas de efectividad.

---

## Dudas y Preguntas