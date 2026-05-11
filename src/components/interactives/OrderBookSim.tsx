import { useState } from 'react';
import clsx from 'clsx';

// 簡易な板（オーダーブック）と注文シミュレーター。
// 成行・指値のどちらでどう約定するかを体感できる。

type Order = { price: number; qty: number };

const initialBuyOrders: Order[] = [
  { price: 998, qty: 200 },
  { price: 997, qty: 500 },
  { price: 995, qty: 800 },
  { price: 992, qty: 1200 },
  { price: 990, qty: 2000 },
];

const initialSellOrders: Order[] = [
  { price: 1000, qty: 300 },
  { price: 1001, qty: 600 },
  { price: 1003, qty: 900 },
  { price: 1005, qty: 1500 },
  { price: 1008, qty: 1800 },
];

type Result = {
  type: 'success' | 'partial' | 'pending';
  message: string;
  filled?: { price: number; qty: number }[];
  avgPrice?: number;
};

export function OrderBookSim() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [limitPrice, setLimitPrice] = useState(1000);
  const [qty, setQty] = useState(500);
  const [result, setResult] = useState<Result | null>(null);

  const buyOrders = initialBuyOrders;
  const sellOrders = initialSellOrders;

  const submit = () => {
    if (orderType === 'market') {
      // 成行：side=buy なら sell 板を上から消化、side=sell なら buy 板を上から消化
      const book = side === 'buy' ? [...sellOrders] : [...buyOrders];
      let remaining = qty;
      const filled: { price: number; qty: number }[] = [];
      for (const lvl of book) {
        if (remaining <= 0) break;
        const take = Math.min(remaining, lvl.qty);
        filled.push({ price: lvl.price, qty: take });
        remaining -= take;
      }
      const totalQty = filled.reduce((a, b) => a + b.qty, 0);
      const avgPrice =
        totalQty > 0
          ? filled.reduce((a, b) => a + b.price * b.qty, 0) / totalQty
          : 0;
      if (remaining > 0) {
        setResult({
          type: 'partial',
          message: `成行${side === 'buy' ? '買い' : '売り'}：${totalQty}株は約定、${remaining}株は板枯れで未約定`,
          filled,
          avgPrice,
        });
      } else {
        setResult({
          type: 'success',
          message: `成行${side === 'buy' ? '買い' : '売り'} ${qty}株を平均 ¥${avgPrice.toFixed(2)} で即時約定`,
          filled,
          avgPrice,
        });
      }
    } else {
      // 指値：buy なら limitPrice 以上の sell に当たれば約定、sell なら limitPrice 以下の buy
      if (side === 'buy') {
        const matchable = sellOrders.filter((o) => o.price <= limitPrice);
        if (matchable.length === 0) {
          setResult({
            type: 'pending',
            message: `指値 ¥${limitPrice} で買い注文を発注しました。条件を満たす売り注文が現れるまで未約定で待機します（買えていません）`,
          });
        } else {
          // 上から消化
          let remaining = qty;
          const filled: { price: number; qty: number }[] = [];
          for (const lvl of matchable) {
            if (remaining <= 0) break;
            const take = Math.min(remaining, lvl.qty);
            filled.push({ price: lvl.price, qty: take });
            remaining -= take;
          }
          const totalQty = filled.reduce((a, b) => a + b.qty, 0);
          const avgPrice =
            totalQty > 0
              ? filled.reduce((a, b) => a + b.price * b.qty, 0) / totalQty
              : 0;
          if (remaining > 0) {
            setResult({
              type: 'partial',
              message: `${totalQty}株を平均 ¥${avgPrice.toFixed(2)} で約定。残り${remaining}株は条件を満たす売りが出るまで待機`,
              filled,
              avgPrice,
            });
          } else {
            setResult({
              type: 'success',
              message: `指値 ¥${limitPrice} 買い ${qty}株が平均 ¥${avgPrice.toFixed(2)} で約定`,
              filled,
              avgPrice,
            });
          }
        }
      } else {
        const matchable = buyOrders.filter((o) => o.price >= limitPrice);
        if (matchable.length === 0) {
          setResult({
            type: 'pending',
            message: `指値 ¥${limitPrice} で売り注文を発注しました。条件を満たす買い注文が現れるまで未約定で待機します`,
          });
        } else {
          let remaining = qty;
          const filled: { price: number; qty: number }[] = [];
          for (const lvl of matchable) {
            if (remaining <= 0) break;
            const take = Math.min(remaining, lvl.qty);
            filled.push({ price: lvl.price, qty: take });
            remaining -= take;
          }
          const totalQty = filled.reduce((a, b) => a + b.qty, 0);
          const avgPrice =
            totalQty > 0
              ? filled.reduce((a, b) => a + b.price * b.qty, 0) / totalQty
              : 0;
          setResult({
            type: remaining > 0 ? 'partial' : 'success',
            message:
              remaining > 0
                ? `${totalQty}株を平均 ¥${avgPrice.toFixed(2)} で約定。残り${remaining}株は待機`
                : `指値 ¥${limitPrice} 売り ${qty}株が平均 ¥${avgPrice.toFixed(2)} で約定`,
            filled,
            avgPrice,
          });
        }
      }
    }
  };

  return (
    <div className="card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-2">
        <span className="chip-accent">🧪 シミュレーター</span>
        <h3 className="text-base sm:text-lg">板（オーダーブック）で注文を体験</h3>
      </div>
      <p className="text-xs text-slate-600">
        左の板（売り注文・買い注文の一覧）を見ながら、右の注文フォームで注文を出してみよう。
        成行と指値でどう約定するか試せます。
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 板 */}
        <div className="card border-slate-200 overflow-hidden">
          <div className="text-xs font-semibold bg-slate-50 px-3 py-2 border-b border-slate-100">
            📖 板情報（気配値）
          </div>
          <table className="w-full text-sm">
            <thead className="text-[11px] text-slate-500">
              <tr>
                <th className="text-right p-1.5 px-3 w-1/3">売り 株数</th>
                <th className="text-center p-1.5 px-3 w-1/3">価格</th>
                <th className="text-left p-1.5 px-3 w-1/3">買い 株数</th>
              </tr>
            </thead>
            <tbody className="font-mono tabular-nums text-xs">
              {[...sellOrders].reverse().map((o) => (
                <tr key={`s-${o.price}`} className="bg-rose-50/40">
                  <td className="text-right p-1.5 px-3 text-rose-700">{o.qty.toLocaleString()}</td>
                  <td className="text-center p-1.5 px-3 font-bold text-rose-800">{o.price}</td>
                  <td className="p-1.5 px-3"></td>
                </tr>
              ))}
              {buyOrders.map((o) => (
                <tr key={`b-${o.price}`} className="bg-emerald-50/40">
                  <td className="p-1.5 px-3"></td>
                  <td className="text-center p-1.5 px-3 font-bold text-emerald-800">{o.price}</td>
                  <td className="p-1.5 px-3 text-emerald-700">{o.qty.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 注文フォーム */}
        <div className="space-y-3">
          <div className="flex gap-1.5 rounded-xl bg-slate-100 p-1">
            <TabButton active={side === 'buy'} onClick={() => setSide('buy')} color="emerald">
              買い
            </TabButton>
            <TabButton active={side === 'sell'} onClick={() => setSide('sell')} color="rose">
              売り
            </TabButton>
          </div>

          <div className="flex gap-1.5 rounded-xl bg-slate-100 p-1">
            <TabButton active={orderType === 'market'} onClick={() => setOrderType('market')}>
              成行
            </TabButton>
            <TabButton active={orderType === 'limit'} onClick={() => setOrderType('limit')}>
              指値
            </TabButton>
          </div>

          {orderType === 'limit' && (
            <div>
              <label className="text-xs text-slate-600">指値価格</label>
              <input
                type="number"
                value={limitPrice}
                onChange={(e) => setLimitPrice(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-navy-400 font-mono"
              />
            </div>
          )}

          <div>
            <label className="text-xs text-slate-600">株数</label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-navy-400 font-mono"
            />
          </div>

          <button type="button" onClick={submit} className="btn-accent w-full">
            注文を出す
          </button>

          {result && (
            <div
              className={clsx(
                'p-3 rounded-xl text-sm border',
                result.type === 'success' && 'bg-emerald-50 border-emerald-200 text-emerald-900',
                result.type === 'partial' && 'bg-amber-50 border-amber-200 text-amber-900',
                result.type === 'pending' && 'bg-sky-50 border-sky-200 text-sky-900',
              )}
            >
              <div className="font-semibold mb-1">
                {result.type === 'success' && '✅ 約定'}
                {result.type === 'partial' && '⚠️ 一部約定'}
                {result.type === 'pending' && '⏳ 待機中'}
              </div>
              <div>{result.message}</div>
              {result.filled && result.filled.length > 0 && (
                <div className="mt-2 text-xs space-y-0.5">
                  {result.filled.map((f, i) => (
                    <div key={i}>
                      • ¥{f.price} × {f.qty}株
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <details className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
        <summary className="cursor-pointer font-semibold">💡 試してみよう</summary>
        <ul className="mt-2 space-y-1">
          <li>「成行 買い 500株」→ 売り板の上から消化（¥1,000 × 300 + ¥1,001 × 200）</li>
          <li>「成行 買い 5,000株」→ 板が枯れて一部未約定</li>
          <li>「指値 ¥995 買い 1,000株」→ 売り板に¥995以下はないので待機（買えない）</li>
          <li>「指値 ¥1,005 買い 1,000株」→ 板を消化して即約定</li>
        </ul>
      </details>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: 'emerald' | 'rose';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition',
        active
          ? color === 'emerald'
            ? 'bg-white shadow text-emerald-700'
            : color === 'rose'
              ? 'bg-white shadow text-rose-700'
              : 'bg-white shadow text-navy-800'
          : 'text-slate-500 hover:text-slate-700',
      )}
    >
      {children}
    </button>
  );
}
