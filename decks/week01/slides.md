<section class="title-slide">
Semana 1 | Introducción
<div class="subtitle">Ingeniería Financiera y Administración de Riesgos Financieros • <em>Octubre 7, 2025</em></div>
</section>

---

## Agenda
1. Sobre el Profesor
2. Expectativas en la Clase
3. Housekeeping
4. Contenido Semana 1
5. Dudas y Preguntas

---

## Sobre el Profesor
- **Educación:**
    - Economista, UTPL<img src="../../shared/images/logo.png" width="90" />
    - MBA, INCAE BUSINESS SCHOOL<img src="../../shared/images/incae.png" width="90" />
        - Especialidad en Finanzas, The Fuqua School of Business at Duke <img src="../../shared/images/duke.png" width="90" />
 

--

## Sobre el Profesor
- **Educación:**
    - PhD. (c), Ivey Business School at Western University <img src="../../shared/images/ivey.png" width="90" />

--

## Sobre el Profesor
- **Experiencia:**
    - Banca de Inversión - USD 240M en transacciones
    - Casos de estudio Publicados en 7 industrias y 5 paises
        - Essentials of Modern Marketing (Central America Edition)
    - Directorios y Juntas de Accionistas

---

## Expectativas en la Clase
- Participación: **al menos un aporte relevante por clase**
- Cold calls: **posibles**; mantén tus notas preparadas
- No hay “respuesta correcta” — **construimos el análisis juntos**

---

## Housekeeping
- Correo: *aariofrio@utpl.edu.ec* — respondo tarde/noche
- Cámara encendida para considerar la participación
- Tutoría: Chat de Teams en Horario de Tutoría (excepciones existentes).


---

## Contenido Semana 1
Introducción y Conceptos Generales

---

## ¿Qué es Riesgo?

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
    <iframe
      src="https://www.mentimeter.com/app/presentation/al6rjjpyedjz3mwws28kngf7x9wbb7ks/embed"
      sandbox="allow-scripts allow-same-origin allow-presentation"
      allowfullscreen
      allowtransparency="true"
      frameborder="0"
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      loading="lazy">
    </iframe>
  </div>

--

Pérdida Potencial (Esperada e Inesperada)

---

## ¿Cómo Cuantifico el Riesgo?

--

Riesgo=Probabilidad x Severidad

---

## ¿Qué es un rendimiento?

--

Ganancia de Capital + Dividendo

--

$$
R = \left(\frac{P_1 - P_0}{P_0}\right) + \left(\frac{D_1}{P_0}\right)
$$

---

## ¿Cuál es la relación riesgo rendimiento?

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
    <iframe
      src="https://miro.com/app/live-embed/uXjVJ-pN2bw=/?embedMode=view_only_without_ui&moveToViewport=-692,-412,1382,822&embedId=332130586804"
      frameborder="0"
      scrolling="no"
      allow="fullscreen; clipboard-read; clipboard-write"
      allowfullscreen
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      loading="lazy">
    </iframe>
  </div>

---
<section class="title-slide">
  <div class="midtitle">Riesgo: Definiciones y Enfoque</div>
  <div class="subtitle">Motivación, conceptos clave y marco mental</div>
</section>

--
### A1. ¿Por qué gestionar el riesgo?
- Riesgo como **variabilidad de resultados** con potencial de pérdida.
- Crea valor al **reducir costos de distress**, suavizar inversión y proteger contratos.
- **Objetivo**: decisiones robustas bajo incertidumbre (no eliminar riesgo, _administrarlo_).

--
### A2. Riesgo vs. Incertidumbre
- **Riesgo**: probabilidades estimables (modelo empírico).
- **Incertidumbre**: probabilidades no confiables o desconocidas (regímenes, rupturas).
- Implicación: elegir **métricas y procesos** acordes al _grado_ de conocimiento.

--
### A3. Pérdida esperada y dispersión
- Pérdida esperada: $\mathbb{E}[L]$; riesgo: **dispersión** alrededor de $\mathbb{E}[L]$.
- Varianza: $\mathrm{Var}(R)=\mathbb{E}\!\left[(R-\mu)^2\right]$; desviación: $\sigma=\sqrt{\mathrm{Var}}$.
- **Asimetría** y **colas pesadas** importan para pérdidas extremas.

--
### A4. Exposición y vulnerabilidad
- Exposición: tamaño del libro/posición ($), vencimientos, convexidad.
- Vulnerabilidad: sensibilidad a shocks (_betas_, duraciones, gaps).
- **Idea guía**: Riesgo $=$ **exposición × sensibilidad × volatilidad**.

---
<section class="title-slide">
  <div class="midtitle">Taxonomía de Riesgos</div>
  <div class="subtitle">Tipos, extensiones y mapeo a métricas</div>
</section>

--
### B1. Tipos principales
- **Mercado**: precios de activos, tasas, FX, commodities.
- **Crédito**: incumplimiento, migración, concentración.
- **Liquidez**: _market_ (profundidad) y _funding_ (financiamiento)-brechas.
- **Operacional**: procesos, personas, sistemas, eventos externos.

--
### B2. Extensiones y fronteras
- **Legal/compliance**, **reputacional**, **estratégico**.
- **Riesgo de modelo**: especificación, parámetros, implementación.
- Fronteras: crédito vs. mercado (CVaR (ES) de derivados); liquidez de mercado vs. fondeo.

--
### B3. Mapeo de riesgos a métricas
- Mercado: $\sigma$, beta, VaR/ES, _greeks_.
- Crédito: PD, LGD, EAD; pérdida esperada: $\mathrm{EL}=\mathrm{PD}\times\mathrm{LGD}\times \mathrm{EAD}$.
- Liquidez: _bid–ask_, profundidad, LCR/NSFR, _time-to-liquidate_.
- Operacional: frecuencia & severidad; colas pesadas (familias _severity_).

--
### B4. Diversificación y correlaciones
- Correlación **dinámica** (regímenes) — suele **aumentar** en estrés.
- Implicación: límites y colchones deben contemplar **co-movimientos** extremos.

---
<section class="title-slide">
  <div class="midtitle">Medición: Media, Varianza, Correlación</div>
  <div class="subtitle">Momentos, portafolios y volatilidad</div>
</section>

--
### C1. Retornos y momentos
- Retorno: $R_t=\ln(P_t/P_{t-1})$ (log) o $R_t=(P_t-P_{t-1})/P_{t-1}$.
- $\mu=\mathbb{E}[R]$, $\sigma=\sqrt{\mathbb{E}(R-\mu)^2}$.
- Sesgo y curtosis para **colas y asimetrías**.

--
### C2. Portafolio: varianza y correlación
- $\mu_p=\sum_i w_i \mu_i$.
- $\sigma_p^2=\mathbf{w}^\top \Sigma \mathbf{w}$, con $\Sigma$ matriz de covarianzas.
- Diversificación: $\sigma_p$ cae si correlaciones $<1$.

--
### C3. Estimación de volatilidad (intuición)
- Muestras rodantes y **EWMA**: $\sigma_t^2=\lambda\sigma_{t-1}^2+(1-\lambda)r_{t-1}^2$.
- **Clustering** de volatilidad; sensibilidad a ventana y $\lambda$.

--
### C4. Medición vs. decisión
- Métrica _decision_: interpretable, estable, sensible al riesgo relevante.
- Tensión: rapidez (paramétrico) vs. realismo (histórico/MC).

---
<section class="title-slide">
  <div class="midtitle">Valor en Riesgo (VaR): Conceptos y Métodos</div>
  <div class="subtitle">Definición, enfoques y límites</div>
</section>

--
### D1. Definición e interpretación
- $\mathrm{VaR}_{\alpha,H}$: pérdida tal que $\mathbb{P}(L \le \mathrm{VaR})=\alpha$ en horizonte $H$.
- **No** es la peor pérdida; no informa la cola más allá de $\alpha$.
- Requiere: posición, horizonte, nivel de confianza, convención de signo (pérdidas $+$).

--
### D2. VaR paramétrico (normal/t)

<ul>
  <li>Normal:
    \( \mathrm{VaR}_{\alpha} \approx z_{\alpha}\,\sigma_p - \mu_p \) (en pérdidas)
  </li>
  <li>t-Student (\( \nu \) g.l.):
    \( \mathrm{VaR}_{\alpha} \approx t_{\alpha,\nu}\,\sigma_p
       \sqrt{\frac{\nu-2}{\nu}} - \mu_p \)
  </li>
  <li>Pros: rápido, parsimonioso. Contras: colas/asimetrías mal capturadas si no se ajusta.</li>
</ul>

--
### D3. VaR histórico
- Ordenar P/L empíricos y tomar el percentil $(1-\alpha)$.
- Captura no-normalidad y no linealidades de la cartera.
- Sensible a ventana, ponderaciones y **cambios de régimen**.

--
### D4. Riesgos y usos del VaR
- Riesgo de modelo (supuestos), de estimación (muestras) y de **implementación**.
- Uso: límites, capital económico, _backtesting_. Compleméntese con ES/CVaR y estrés.

---
<section class="title-slide">
  <div class="midtitle">Monte Carlo y Volatilidad</div>
  <div class="subtitle">Simulación, dependencias y estados</div>
</section>

--
### E1. Esquema Monte Carlo para P/L
1. Especificar distribución/juntas para factores de riesgo.  
2. Simular escenarios $\{\mathbf{X}^{(s)}\}_{s=1}^S$.  
3. Mapear a P/L: $L^{(s)}=f(\mathbf{X}^{(s)},\text{posición})$.  
4. Percentil: $\mathrm{VaR}_{\alpha}=\mathrm{quantile}(L,\alpha)$.

--
### E2. Dependencias y no linealidades
- Correlaciones (matriz $\Sigma$) o **cópulas** para colas conjuntas.
- Derivados: P/L no lineal; Monte Carlo captura convexidad (_gamma_).

--
### E3. Volatilidad como estado
- EWMA/GARCH (intuición): **clustering** y memoria larga.
- Regímenes: cambiar $\lambda$ o mezclar estados para choques.

--
### E4. Elecciones de modelado que más importan
- Cola (normal vs. t) y **dependencia** en extremos.
- Horizonte y remuestreo de **líquidos vs. ilíquidos**.

---
<section class="title-slide">
  <div class="midtitle">Proceso y Gobernanza de Riesgos</div>
  <div class="subtitle">Ciclo, apetito y control</div>
</section>

--
### F1. Ciclo de gestión
- **Identificar → Medir → Monitorear → Controlar**.
- Documentación, _data lineage_, trazabilidad de supuestos.

--
### F2. Apetito y capacidad de riesgo
- **Capacidad**: límites económicos/regulatorios.
- **Apetito**: variabilidad/pérdida deseada para objetivos.
- Declaraciones claras: métricas, horizontes, umbrales y **tolerancias**.

--
### F3. Límites, KRIs y escalamiento
- Límites por libro/factor; **triggers** de alerta y acciones.
- KRIs: métricas adelantadas (volatilidad, _liquidity gaps_, concentración).

--
### F4. Tres líneas de defensa
- 1ª: negocio (toma y primera gestión del riesgo).
- 2ª: riesgos/compliance (política, validación).
- 3ª: auditoría interna (independiente).

---
<section class="title-slide">
  <div class="midtitle">Gestión Corporativa y Creación de Valor</div>
  <div class="subtitle">Cuándo agrega valor y políticas</div>
</section>

--
### G1. ¿Cuándo agrega valor la gestión de riesgos?
- Reduce costos esperados de quiebra/distress.
- Mitiga subinversión por restricciones financieras.
- Suaviza impuestos (no linealidades) y mejora contratos con _stakeholders_.

--
### G2. ¿Cuándo _no_ agrega valor?
- Riesgos totalmente **diversificables** por inversionistas.
- Coberturas que destruyen _upside_ sin beneficio en costo de capital.

--
### G3. Políticas y herramientas
- **Coberturas naturales**: _matching_ de monedas/plazos/índices.
- **Derivados/seguros**: forwards, swaps, opciones; pólizas.
- Diseño: objetivo claro, horizonte, métrica de éxito, gobernanza.

--
### G4. Métrica riesgo–retorno (intuición)
- Ajuste por riesgo (p. ej., intuición tipo Sharpe/RAROC).
- Evaluar si la política **mejora el perfil** retorno–riesgo y cumple apetito.


---

## Dudas y Preguntas