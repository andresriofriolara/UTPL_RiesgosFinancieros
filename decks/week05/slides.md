<section class="title-slide">
Semana 5 | Riesgo de Mercado
<div class="subtitle">Ingeniería Financiera y Administración de Riesgos Financieros • <em>Noviembre 04, 2025</em></div>
</section>

---

## Agenda
1. Sobre la Semana Anterior
2. Contenido Semana 5

---

## Sobre la Semana Anterior
- **4.1 Gestión de la liquidez**
- **4.2 Riesgo de interés**
- **4.3 Cobertura de riesgos de interés mediante instrumentos financieros**


---

## Semana 5

Riesgo de Mercado

---

# Semana 5: 
Riesgo Mercado

- **5.1 Fundamentos de medición**
- **5.2 Duración efectiva, KRD y curva de tasas**
- **5.3 Cobertura con futuros y swaps**
- **5.4 Puente a ALM y ejemplos**

---

## 5.1 Fundamentos de medición
### Precio de un bono y sensibilidad a la tasa
- Bono sin opciones: el precio depende del rendimiento \(y\) vía descuento de flujos:
  $$
  P=\sum_{t=1}^{T}\frac{CF_t}{(1+y)^t}.
  $$

--

- Relación inversa: sube \(y\) ⇒ baja \(P\); baja \(y\) ⇒ sube \(P\).
- La derivada de \(P\) respecto de \(y\) motiva duración y, luego, convexidad.

--

### Duración de Macaulay: definición e intuición
- Promedio temporal de los flujos ponderados por su valor presente:
  $$
  D_M=\frac{\sum_{t=1}^{T} t\,\frac{CF_t}{(1+y)^t}}{P}.
  $$
- Intuición: “centro de gravedad” de los flujos; mayor $D_M$ ⇒ mayor sensibilidad del precio a $y$.

--

### Duración modificada: elasticidad precio–rendimiento
- Ajusta \(D_M\) por el nivel de tasa:
  $$
  D_{\text{mod}}=\frac{D_M}{1+y}.
  $$
- Aproximación lineal para cambios pequeños:
  $$
  \frac{\Delta P}{P}\approx -D_{\text{mod}}\;\Delta y.
  $$

--

- Lectura: un cambio de 1 punto porcentual en \(y\) ≈ \(D_{\text{mod}}\)% (con signo negativo) en \(P\).

--

### PVBP y DV01: sensibilidad en dinero (definiciones en esta diapositiva)
- **PVBP** (*Price Value of a Basis Point*): cambio de precio por **1 punto básico** de rendimiento; 1 punto básico = \(0{,}01\%\) = \(0{,}0001\).
- **DV01** (*Dollar Value of 01*): PVBP expresado en unidades monetarias.

--

- Aproximación práctica:
  $\text{PVBP}\approx D_{\text{mod}}\times P \times 0{,}0001,\qquad \text{DV01}=\text{PVBP}$
- Uso: traducir sensibilidad porcentual a dinero para dimensionar coberturas.

--

### Convexidad: corrección de segundo orden
- La linealidad de duración falla ante choques no triviales; se necesita curvatura.
- Definición:
  $$
  C=\frac{1}{P}\frac{\partial^2 P}{\partial y^2}
   =\frac{1}{P}\sum_{t=1}^{T}t(t+1)\frac{CF_t}{(1+y)^{t+2}}.
  $$

--

- Aproximación cuadrática:
  $$
  \frac{\Delta P}{P}\approx -D_{\text{mod}}\Delta y+\frac{1}{2}C(\Delta y)^2.
  $$

--

### Convexidad: interpretación y preferencia
- Convexidad positiva ⇒ para choques simétricos de \(y\), la ganancia cuando cae la tasa supera la pérdida cuando sube.
- A igual \(y\) y duración, preferible mayor convexidad (mejor perfil no lineal).

---

## 5.2 Duración efectiva, KRD y curva de tasas
### Duración efectiva (definida aquí)
- Para instrumentos con opcionalidad (flujos que dependen de y).
- Generaliza la duración cuando $CF_t$ cambia con la tasa.

--

- Cálculo por “bump & reprice”:
  $$
  D_{\text{ef}}\approx \frac{P_{-}-P_{+}}{2P_0\,\Delta y},
  $$
  con \(P_{+}\) y \(P_{-}\) precios bajo choques \(+\Delta y\) y \(-\Delta y\).


--

### KRD: Key-Rate Durations (definidas aquí)
- **KRD (Key-Rate Durations)**: sensibilidades del precio a choques en puntos clave de la curva (p. ej., 1Y, 2Y, 5Y, 10Y, 30Y) manteniendo los demás puntos fijos.
- Permite tratar choques no paralelos (nivel, pendiente, curvatura) y diseñar coberturas por tramo.

--

### Curva de tasas: spot, forward y bootstrapping
- **Tasas spot** (cero cupón): factores de descuento “puros”.
- **Tasas forward**: rendimientos implícitos entre dos fechas futuras.
- **Bootstrapping**: construcción de la curva spot desde instrumentos cotizados.
- Uso en gestión: mapear flujos a descuentos consistentes y definir escenarios de choques.

--

### Agregación de sensibilidades en cartera
- Duración (sin opcionalidad):
  $$
  D_{\text{cartera}}=\sum_i w_i\,D_i,\qquad
  w_i=\frac{V_i}{\sum_j V_j}.
  $$
- Sensibilidad en dinero:
  $$
  \text{DV01}_{\text{cartera}}=\sum_i \text{DV01}_i.
  $$

--

- Con opcionalidad/curvas complejas, preferir KRD por tramos y sumar por clave.

--

### De medir a decidir: qué neutralizar
- Selección estratégica: neutralizar **nivel** (paralelo) o **tramos** (pendiente/curvatura) según horizonte y benchmark.
- Ruta operativa: medir $D_{\text{mod}}$, $C$, KRD → convertir a dinero (DV01) → definir tramos objetivo.

---

## 5.3 Cobertura con futuros y swaps
### Forwards y futuros: diferencias operativas (definiciones aquí)
- **Forward**: contrato a plazo **OTC** (*Over-The-Counter*, negociado bilateralmente); ajuste fino de nocional; sin compensación diaria; riesgo de contraparte.

--

- **Futuro**: contrato estandarizado con compensación y **MTM** (*Mark-To-Market*, liquidación diaria por variación); requiere márgenes.
- Implicaciones clave: base, liquidez, calendario de vencimientos ⇒ **tracking error** potencial.

--

### Cobertura con futuros: del DV01 a \(N\) contratos
- Objetivo: neutralizar DV01 total o por tramos (vía KRD).
- Dimensionamiento inicial:
  $N \approx \frac{\text{DV01}_{\text{posición}}}{\text{DV01}_{\text{futuro}}}\times \rho$

  donde $\rho$ es la correlación entre $\Delta P$ de la posición y $\Delta F$ del futuro.
- Si $\rho$ no se usa explícitamente, ajustar luego con el ratio óptimo estimado.

--

### Futuro: práctica de implementación
- Redondeo de $N$ por tamaño mínimo del contrato.
- Gestión del **rollover** (cambio de vencimiento) y costos de margen (inicial/variación).
- Control del **tracking error** por descalces de duración y especificaciones del subyacente.

--

### Swaps de tasa: fijar vs. flotar
- Intercambio de flujos a tasa fija ↔ tasa flotante sobre un nocional.
- **Entrar pagador fijo**: reduce duración neta si la cartera es muy sensible a subas de \(y\).
- **Entrar receptor fijo**: aumenta duración neta (apuesta a bajas de \(y\)).
- Ventaja: ajustar duración objetivo sin vender subyacentes ni gestionar márgenes diarios.

--

### Duration targeting con swap: nocional objetivo
- Meta: llevar duración de \(D_c\) a \(D^\*\) en cartera de valor \(V_c\).
- Swap con duración aproximada \(D_s\) (el signo depende de ser pagador o receptor fijo).
- Nocional aproximado:
  $$
  N \approx \frac{(D^\*-D_c)\,V_c}{D_s}.
  $$

--

- Verificación posterior: consistencia con DV01/KRD resultantes.

--

### Hedge de mínima varianza: ratio óptimo
- Ratio que minimiza la varianza del resultado cubierto.
- Estimación por regresión:
  $$
  h^\*=\beta=\frac{\operatorname{Cov}(\Delta P,\ \Delta F)}{\operatorname{Var}(\Delta F)}.
  $$

--

- Reducción esperada de varianza:
  $$
  \operatorname{Var}_{\text{hedged}}
  =\operatorname{Var}(\Delta P)\,(1-\rho^2).
  $$

--

### Tracking error: fuentes y mitigación
- Fuentes: base, descalce de vencimientos, cupones, liquidez, entrega vs. liquidación, horarios de mercado.
- Mitigación:
  - Usar contratos con duración cercana al activo.
  - Recalibrar $h^\*$ con datos recientes y ventanas adecuadas.

--

  - Combinar contratos en tramos (aproximación por KRD).
  - Considerar swaps para estabilidad de duración sin fricción de márgenes.

---

## 5.4 Puente a ALM y ejemplos
### ALM: Asset–Liability Management (definido aquí)
- **ALM (Asset–Liability Management)**: gestión coordinada de activos y pasivos para estabilizar valor y resultados ante choques de tasa.
- Objetivo: coherencia entre sensibilidades de ambos lados del balance (por plazo y por tramo).
- Herramientas: duración, KRD, *gap* y **duration-gap** por tramo.

--

### NII y EaR: métricas de resultado (definidas aquí)
- **NII (Net Interest Income)**: ingresos por intereses – gastos por intereses en horizonte corto.
- **EaR (Earnings at Risk)**: pérdida potencial del NII bajo un shock de tasa especificado.
- Complementan la perspectiva de valor (DV01/EVE) con impacto en resultados.

--

### EVE y duration-gap (definidos aquí)
- **EVE (Economic Value of Equity)**: valor presente de activos menos pasivos.
- Aproximación ante choque paralelo \(\Delta y\):
  $$
  \Delta \text{EVE}\approx -D_{\text{gap}}\times \text{EVE}\times \Delta y,
  $$
  donde $D_{\text{gap}}$ es la diferencia de duración (activos – pasivos) ponderada por valor.
- Meta: $D_{\text{gap}}\approx 0$ para estabilizar EVE.

--

### Ejemplo I: duración, DV01 y convexidad
- Bono a 5 años, cupón 6% anual, \(y=5\%\), nominal 100:
  $$
  P=\sum_{t=1}^{5}\frac{CF_t}{(1+0.05)^t}.
  $$

--

- Obtener $D_M$ y $D_{\text{mod}}=\dfrac{D_M}{1+0.05}$.
- **DV01**:
  $$
  \text{DV01}\approx D_{\text{mod}}\times P \times 0.0001.
  $$
- Con $\Delta y=+0.005$:
  $$
  \frac{\Delta P}{P}\approx -D_{\text{mod}}\Delta y+\frac{1}{2}C(\Delta y)^2.
  $$

--

### Ejemplo II: cobertura con futuros
- Cartera con **DV01** \(= 85{,}000\) (dinero); futuro con **DV01** \(= 65\) por contrato; \(\rho=0.95\).
- Número de contratos:
  $$
  N\approx \frac{85\,000}{65}\times 0.95.
  $$
- Consideraciones: redondeo, **rollover**, márgenes (inicial y de variación) y *tracking error*.

--

### Ejemplo III: ajuste fino con swap
- Cartera: $D_c=4.8$ años, $V_c=50{,}000{,}000$; objetivo $D^\*=4.0$ años.
- Swap con $D_s\approx 7.5$ (entrar **pagador fijo** ⇒ reduce duración).
- Nocional del swap:
  $$
  N \approx \frac{(4.0-4.8)\times 50{,}000{,}000}{7.5}.
  $$
- Verificar DV01 post-swap y consistencia por tramos (KRD) si los choques no son paralelos.


---

## Dudas y Preguntas