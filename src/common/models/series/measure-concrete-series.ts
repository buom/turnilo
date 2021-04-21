/*
 * Copyright 2017-2019 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ApplyExpression, Expression } from "plywood";
import { Measure } from "../measure/measure";
import { applyPeriodFilter } from "../time-shift/time-shift-env";
import { ConcreteSeries, ExpressionEnv } from "./concrete-series";
import { MeasureSeries } from "./measure-series";

export function fromMeasure(measure: Measure): MeasureConcreteSeries {
  return new MeasureConcreteSeries(MeasureSeries.fromMeasure(measure), measure);
}

export class MeasureConcreteSeries extends ConcreteSeries<MeasureSeries> {

  protected applyExpression(exp: Expression, name: string, { periodFilter }: ExpressionEnv): ApplyExpression {
    const expression = applyPeriodFilter(exp, periodFilter);
    return new ApplyExpression({ expression, name });
  }
}
