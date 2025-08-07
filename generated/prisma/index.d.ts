
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WareHouse
 * 
 */
export type WareHouse = $Result.DefaultSelection<Prisma.$WareHousePayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductBrand
 * 
 */
export type ProductBrand = $Result.DefaultSelection<Prisma.$ProductBrandPayload>
/**
 * Model InventoryLevel
 * 
 */
export type InventoryLevel = $Result.DefaultSelection<Prisma.$InventoryLevelPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model PurchaseOrderItem
 * 
 */
export type PurchaseOrderItem = $Result.DefaultSelection<Prisma.$PurchaseOrderItemPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model ProductPriceHistory
 * 
 */
export type ProductPriceHistory = $Result.DefaultSelection<Prisma.$ProductPriceHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PurchaseOrderStatus: {
  pending: 'pending',
  approved: 'approved',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus]


export const UserRole: {
  admin: 'admin',
  manager: 'manager',
  seller: 'seller'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type PurchaseOrderStatus = $Enums.PurchaseOrderStatus

export const PurchaseOrderStatus: typeof $Enums.PurchaseOrderStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wareHouse`: Exposes CRUD operations for the **WareHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WareHouses
    * const wareHouses = await prisma.wareHouse.findMany()
    * ```
    */
  get wareHouse(): Prisma.WareHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productBrand`: Exposes CRUD operations for the **ProductBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBrands
    * const productBrands = await prisma.productBrand.findMany()
    * ```
    */
  get productBrand(): Prisma.ProductBrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryLevel`: Exposes CRUD operations for the **InventoryLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLevels
    * const inventoryLevels = await prisma.inventoryLevel.findMany()
    * ```
    */
  get inventoryLevel(): Prisma.InventoryLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrderItem`: Exposes CRUD operations for the **PurchaseOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrderItems
    * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany()
    * ```
    */
  get purchaseOrderItem(): Prisma.PurchaseOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPriceHistory`: Exposes CRUD operations for the **ProductPriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPriceHistories
    * const productPriceHistories = await prisma.productPriceHistory.findMany()
    * ```
    */
  get productPriceHistory(): Prisma.ProductPriceHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    WareHouse: 'WareHouse',
    Supplier: 'Supplier',
    ProductCategory: 'ProductCategory',
    Product: 'Product',
    ProductBrand: 'ProductBrand',
    InventoryLevel: 'InventoryLevel',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderItem: 'PurchaseOrderItem',
    StockMovement: 'StockMovement',
    ProductPriceHistory: 'ProductPriceHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "wareHouse" | "supplier" | "productCategory" | "product" | "productBrand" | "inventoryLevel" | "purchaseOrder" | "purchaseOrderItem" | "stockMovement" | "productPriceHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WareHouse: {
        payload: Prisma.$WareHousePayload<ExtArgs>
        fields: Prisma.WareHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WareHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WareHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findFirst: {
            args: Prisma.WareHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WareHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findMany: {
            args: Prisma.WareHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          create: {
            args: Prisma.WareHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          createMany: {
            args: Prisma.WareHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WareHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          update: {
            args: Prisma.WareHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          deleteMany: {
            args: Prisma.WareHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WareHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WareHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          aggregate: {
            args: Prisma.WareHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWareHouse>
          }
          groupBy: {
            args: Prisma.WareHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WareHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WareHouseCountArgs<ExtArgs>
            result: $Utils.Optional<WareHouseCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductBrand: {
        payload: Prisma.$ProductBrandPayload<ExtArgs>
        fields: Prisma.ProductBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          findFirst: {
            args: Prisma.ProductBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          findMany: {
            args: Prisma.ProductBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>[]
          }
          create: {
            args: Prisma.ProductBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          createMany: {
            args: Prisma.ProductBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          update: {
            args: Prisma.ProductBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          deleteMany: {
            args: Prisma.ProductBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBrandPayload>
          }
          aggregate: {
            args: Prisma.ProductBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBrand>
          }
          groupBy: {
            args: Prisma.ProductBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBrandCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBrandCountAggregateOutputType> | number
          }
        }
      }
      InventoryLevel: {
        payload: Prisma.$InventoryLevelPayload<ExtArgs>
        fields: Prisma.InventoryLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          findFirst: {
            args: Prisma.InventoryLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          findMany: {
            args: Prisma.InventoryLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>[]
          }
          create: {
            args: Prisma.InventoryLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          createMany: {
            args: Prisma.InventoryLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          update: {
            args: Prisma.InventoryLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLevelPayload>
          }
          aggregate: {
            args: Prisma.InventoryLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLevel>
          }
          groupBy: {
            args: Prisma.InventoryLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryLevelCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLevelCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrderItem: {
        payload: Prisma.$PurchaseOrderItemPayload<ExtArgs>
        fields: Prisma.PurchaseOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchaseOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          update: {
            args: Prisma.PurchaseOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrderItem>
          }
          groupBy: {
            args: Prisma.PurchaseOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderItemCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      ProductPriceHistory: {
        payload: Prisma.$ProductPriceHistoryPayload<ExtArgs>
        fields: Prisma.ProductPriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProductPriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          findMany: {
            args: Prisma.ProductPriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>[]
          }
          create: {
            args: Prisma.ProductPriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          createMany: {
            args: Prisma.ProductPriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductPriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          update: {
            args: Prisma.ProductPriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProductPriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPriceHistory>
          }
          groupBy: {
            args: Prisma.ProductPriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    wareHouse?: WareHouseOmit
    supplier?: SupplierOmit
    productCategory?: ProductCategoryOmit
    product?: ProductOmit
    productBrand?: ProductBrandOmit
    inventoryLevel?: InventoryLevelOmit
    purchaseOrder?: PurchaseOrderOmit
    purchaseOrderItem?: PurchaseOrderItemOmit
    stockMovement?: StockMovementOmit
    productPriceHistory?: ProductPriceHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ProductPriceHistory: number
    PurchaseOrder: number
    StockMovement: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPriceHistory?: boolean | UserCountOutputTypeCountProductPriceHistoryArgs
    PurchaseOrder?: boolean | UserCountOutputTypeCountPurchaseOrderArgs
    StockMovement?: boolean | UserCountOutputTypeCountStockMovementArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type WareHouseCountOutputType
   */

  export type WareHouseCountOutputType = {
    InventoryLevel: number
    fromStockMovement: number
    toStockMovement: number
  }

  export type WareHouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryLevel?: boolean | WareHouseCountOutputTypeCountInventoryLevelArgs
    fromStockMovement?: boolean | WareHouseCountOutputTypeCountFromStockMovementArgs
    toStockMovement?: boolean | WareHouseCountOutputTypeCountToStockMovementArgs
  }

  // Custom InputTypes
  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouseCountOutputType
     */
    select?: WareHouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountInventoryLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLevelWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountFromStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountToStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    Product: number
    PurchaseOrder: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | SupplierCountOutputTypeCountProductArgs
    PurchaseOrder?: boolean | SupplierCountOutputTypeCountPurchaseOrderArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    Product: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductCategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    InventoryLevel: number
    ProductPriceHistory: number
    PurchaseOrderItem: number
    StockMovement: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryLevel?: boolean | ProductCountOutputTypeCountInventoryLevelArgs
    ProductPriceHistory?: boolean | ProductCountOutputTypeCountProductPriceHistoryArgs
    PurchaseOrderItem?: boolean | ProductCountOutputTypeCountPurchaseOrderItemArgs
    StockMovement?: boolean | ProductCountOutputTypeCountStockMovementArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLevelWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceHistoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type ProductBrandCountOutputType
   */

  export type ProductBrandCountOutputType = {
    Product: number
  }

  export type ProductBrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductBrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductBrandCountOutputType without action
   */
  export type ProductBrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrandCountOutputType
     */
    select?: ProductBrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductBrandCountOutputType without action
   */
  export type ProductBrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    PurchaseOrderItem: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderItem?: boolean | PurchaseOrderCountOutputTypeCountPurchaseOrderItemArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountPurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    ProductPriceHistory?: boolean | User$ProductPriceHistoryArgs<ExtArgs>
    PurchaseOrder?: boolean | User$PurchaseOrderArgs<ExtArgs>
    StockMovement?: boolean | User$StockMovementArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductPriceHistory?: boolean | User$ProductPriceHistoryArgs<ExtArgs>
    PurchaseOrder?: boolean | User$PurchaseOrderArgs<ExtArgs>
    StockMovement?: boolean | User$StockMovementArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ProductPriceHistory: Prisma.$ProductPriceHistoryPayload<ExtArgs>[]
      PurchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>[]
      StockMovement: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductPriceHistory<T extends User$ProductPriceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$ProductPriceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PurchaseOrder<T extends User$PurchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$PurchaseOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StockMovement<T extends User$StockMovementArgs<ExtArgs> = {}>(args?: Subset<T, User$StockMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ProductPriceHistory
   */
  export type User$ProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    where?: ProductPriceHistoryWhereInput
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    cursor?: ProductPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * User.PurchaseOrder
   */
  export type User$PurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * User.StockMovement
   */
  export type User$StockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WareHouse
   */

  export type AggregateWareHouse = {
    _count: WareHouseCountAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  export type WareHouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type WareHouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type WareHouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type WareHouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type WareHouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type WareHouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type WareHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouse to aggregate.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WareHouses
    **/
    _count?: true | WareHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WareHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WareHouseMaxAggregateInputType
  }

  export type GetWareHouseAggregateType<T extends WareHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWareHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWareHouse[P]>
      : GetScalarType<T[P], AggregateWareHouse[P]>
  }




  export type WareHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WareHouseWhereInput
    orderBy?: WareHouseOrderByWithAggregationInput | WareHouseOrderByWithAggregationInput[]
    by: WareHouseScalarFieldEnum[] | WareHouseScalarFieldEnum
    having?: WareHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WareHouseCountAggregateInputType | true
    _min?: WareHouseMinAggregateInputType
    _max?: WareHouseMaxAggregateInputType
  }

  export type WareHouseGroupByOutputType = {
    id: string
    name: string
    location: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: WareHouseCountAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  type GetWareHouseGroupByPayload<T extends WareHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WareHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WareHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
            : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
        }
      >
    >


  export type WareHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    InventoryLevel?: boolean | WareHouse$InventoryLevelArgs<ExtArgs>
    fromStockMovement?: boolean | WareHouse$fromStockMovementArgs<ExtArgs>
    toStockMovement?: boolean | WareHouse$toStockMovementArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wareHouse"]>



  export type WareHouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type WareHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["wareHouse"]>
  export type WareHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryLevel?: boolean | WareHouse$InventoryLevelArgs<ExtArgs>
    fromStockMovement?: boolean | WareHouse$fromStockMovementArgs<ExtArgs>
    toStockMovement?: boolean | WareHouse$toStockMovementArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WareHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WareHouse"
    objects: {
      InventoryLevel: Prisma.$InventoryLevelPayload<ExtArgs>[]
      fromStockMovement: Prisma.$StockMovementPayload<ExtArgs>[]
      toStockMovement: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["wareHouse"]>
    composites: {}
  }

  type WareHouseGetPayload<S extends boolean | null | undefined | WareHouseDefaultArgs> = $Result.GetResult<Prisma.$WareHousePayload, S>

  type WareHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WareHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WareHouseCountAggregateInputType | true
    }

  export interface WareHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WareHouse'], meta: { name: 'WareHouse' } }
    /**
     * Find zero or one WareHouse that matches the filter.
     * @param {WareHouseFindUniqueArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WareHouseFindUniqueArgs>(args: SelectSubset<T, WareHouseFindUniqueArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WareHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WareHouseFindUniqueOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WareHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WareHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WareHouseFindFirstArgs>(args?: SelectSubset<T, WareHouseFindFirstArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WareHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WareHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WareHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WareHouses
     * const wareHouses = await prisma.wareHouse.findMany()
     * 
     * // Get first 10 WareHouses
     * const wareHouses = await prisma.wareHouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wareHouseWithIdOnly = await prisma.wareHouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WareHouseFindManyArgs>(args?: SelectSubset<T, WareHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WareHouse.
     * @param {WareHouseCreateArgs} args - Arguments to create a WareHouse.
     * @example
     * // Create one WareHouse
     * const WareHouse = await prisma.wareHouse.create({
     *   data: {
     *     // ... data to create a WareHouse
     *   }
     * })
     * 
     */
    create<T extends WareHouseCreateArgs>(args: SelectSubset<T, WareHouseCreateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WareHouses.
     * @param {WareHouseCreateManyArgs} args - Arguments to create many WareHouses.
     * @example
     * // Create many WareHouses
     * const wareHouse = await prisma.wareHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WareHouseCreateManyArgs>(args?: SelectSubset<T, WareHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WareHouse.
     * @param {WareHouseDeleteArgs} args - Arguments to delete one WareHouse.
     * @example
     * // Delete one WareHouse
     * const WareHouse = await prisma.wareHouse.delete({
     *   where: {
     *     // ... filter to delete one WareHouse
     *   }
     * })
     * 
     */
    delete<T extends WareHouseDeleteArgs>(args: SelectSubset<T, WareHouseDeleteArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WareHouse.
     * @param {WareHouseUpdateArgs} args - Arguments to update one WareHouse.
     * @example
     * // Update one WareHouse
     * const wareHouse = await prisma.wareHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WareHouseUpdateArgs>(args: SelectSubset<T, WareHouseUpdateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WareHouses.
     * @param {WareHouseDeleteManyArgs} args - Arguments to filter WareHouses to delete.
     * @example
     * // Delete a few WareHouses
     * const { count } = await prisma.wareHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WareHouseDeleteManyArgs>(args?: SelectSubset<T, WareHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WareHouses
     * const wareHouse = await prisma.wareHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WareHouseUpdateManyArgs>(args: SelectSubset<T, WareHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WareHouse.
     * @param {WareHouseUpsertArgs} args - Arguments to update or create a WareHouse.
     * @example
     * // Update or create a WareHouse
     * const wareHouse = await prisma.wareHouse.upsert({
     *   create: {
     *     // ... data to create a WareHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WareHouse we want to update
     *   }
     * })
     */
    upsert<T extends WareHouseUpsertArgs>(args: SelectSubset<T, WareHouseUpsertArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseCountArgs} args - Arguments to filter WareHouses to count.
     * @example
     * // Count the number of WareHouses
     * const count = await prisma.wareHouse.count({
     *   where: {
     *     // ... the filter for the WareHouses we want to count
     *   }
     * })
    **/
    count<T extends WareHouseCountArgs>(
      args?: Subset<T, WareHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WareHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WareHouseAggregateArgs>(args: Subset<T, WareHouseAggregateArgs>): Prisma.PrismaPromise<GetWareHouseAggregateType<T>>

    /**
     * Group by WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WareHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WareHouseGroupByArgs['orderBy'] }
        : { orderBy?: WareHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WareHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWareHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WareHouse model
   */
  readonly fields: WareHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WareHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WareHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InventoryLevel<T extends WareHouse$InventoryLevelArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$InventoryLevelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fromStockMovement<T extends WareHouse$fromStockMovementArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$fromStockMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toStockMovement<T extends WareHouse$toStockMovementArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$toStockMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WareHouse model
   */
  interface WareHouseFieldRefs {
    readonly id: FieldRef<"WareHouse", 'String'>
    readonly name: FieldRef<"WareHouse", 'String'>
    readonly location: FieldRef<"WareHouse", 'String'>
    readonly createdAt: FieldRef<"WareHouse", 'DateTime'>
    readonly updatedAt: FieldRef<"WareHouse", 'DateTime'>
    readonly isDeleted: FieldRef<"WareHouse", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WareHouse findUnique
   */
  export type WareHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findUniqueOrThrow
   */
  export type WareHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findFirst
   */
  export type WareHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findFirstOrThrow
   */
  export type WareHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findMany
   */
  export type WareHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouses to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse create
   */
  export type WareHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a WareHouse.
     */
    data: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
  }

  /**
   * WareHouse createMany
   */
  export type WareHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WareHouses.
     */
    data: WareHouseCreateManyInput | WareHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WareHouse update
   */
  export type WareHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a WareHouse.
     */
    data: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
    /**
     * Choose, which WareHouse to update.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse updateMany
   */
  export type WareHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WareHouses.
     */
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyInput>
    /**
     * Filter which WareHouses to update
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to update.
     */
    limit?: number
  }

  /**
   * WareHouse upsert
   */
  export type WareHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the WareHouse to update in case it exists.
     */
    where: WareHouseWhereUniqueInput
    /**
     * In case the WareHouse found by the `where` argument doesn't exist, create a new WareHouse with this data.
     */
    create: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
    /**
     * In case the WareHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
  }

  /**
   * WareHouse delete
   */
  export type WareHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter which WareHouse to delete.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse deleteMany
   */
  export type WareHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouses to delete
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to delete.
     */
    limit?: number
  }

  /**
   * WareHouse.InventoryLevel
   */
  export type WareHouse$InventoryLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    where?: InventoryLevelWhereInput
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    cursor?: InventoryLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLevelScalarFieldEnum | InventoryLevelScalarFieldEnum[]
  }

  /**
   * WareHouse.fromStockMovement
   */
  export type WareHouse$fromStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * WareHouse.toStockMovement
   */
  export type WareHouse$toStockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * WareHouse without action
   */
  export type WareHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    Product?: boolean | Supplier$ProductArgs<ExtArgs>
    PurchaseOrder?: boolean | Supplier$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>



  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Supplier$ProductArgs<ExtArgs>
    PurchaseOrder?: boolean | Supplier$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
      PurchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      address: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Supplier$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PurchaseOrder<T extends Supplier$PurchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$PurchaseOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
    readonly isDeleted: FieldRef<"Supplier", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.Product
   */
  export type Supplier$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Supplier.PurchaseOrder
   */
  export type Supplier$PurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    Product?: boolean | ProductCategory$ProductArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>



  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductCategory$ProductArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductCategory$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'String'>
    readonly name: FieldRef<"ProductCategory", 'String'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly isDeleted: FieldRef<"ProductCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.Product
   */
  export type ProductCategory$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    entryPrice: number | null
    unitPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    entryPrice: number | null
    unitPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    supplierId: string | null
    productBrandId: string | null
    name: string | null
    sku: string | null
    description: string | null
    entryPrice: number | null
    unitPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    supplierId: string | null
    productBrandId: string | null
    name: string | null
    sku: string | null
    description: string | null
    entryPrice: number | null
    unitPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    categoryId: number
    supplierId: number
    productBrandId: number
    name: number
    sku: number
    description: number
    entryPrice: number
    unitPrice: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    entryPrice?: true
    unitPrice?: true
  }

  export type ProductSumAggregateInputType = {
    entryPrice?: true
    unitPrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    productBrandId?: true
    name?: true
    sku?: true
    description?: true
    entryPrice?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    productBrandId?: true
    name?: true
    sku?: true
    description?: true
    entryPrice?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    productBrandId?: true
    name?: true
    sku?: true
    description?: true
    entryPrice?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description: string | null
    entryPrice: number
    unitPrice: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    supplierId?: boolean
    productBrandId?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    entryPrice?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    InventoryLevel?: boolean | Product$InventoryLevelArgs<ExtArgs>
    ProductPriceHistory?: boolean | Product$ProductPriceHistoryArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    productBrand?: boolean | ProductBrandDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    PurchaseOrderItem?: boolean | Product$PurchaseOrderItemArgs<ExtArgs>
    StockMovement?: boolean | Product$StockMovementArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    categoryId?: boolean
    supplierId?: boolean
    productBrandId?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    entryPrice?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "supplierId" | "productBrandId" | "name" | "sku" | "description" | "entryPrice" | "unitPrice" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryLevel?: boolean | Product$InventoryLevelArgs<ExtArgs>
    ProductPriceHistory?: boolean | Product$ProductPriceHistoryArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    productBrand?: boolean | ProductBrandDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    PurchaseOrderItem?: boolean | Product$PurchaseOrderItemArgs<ExtArgs>
    StockMovement?: boolean | Product$StockMovementArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      InventoryLevel: Prisma.$InventoryLevelPayload<ExtArgs>[]
      ProductPriceHistory: Prisma.$ProductPriceHistoryPayload<ExtArgs>[]
      category: Prisma.$ProductCategoryPayload<ExtArgs>
      productBrand: Prisma.$ProductBrandPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      PurchaseOrderItem: Prisma.$PurchaseOrderItemPayload<ExtArgs>[]
      StockMovement: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      supplierId: string
      productBrandId: string
      name: string
      sku: string
      description: string | null
      entryPrice: number
      unitPrice: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InventoryLevel<T extends Product$InventoryLevelArgs<ExtArgs> = {}>(args?: Subset<T, Product$InventoryLevelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductPriceHistory<T extends Product$ProductPriceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductPriceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productBrand<T extends ProductBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductBrandDefaultArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PurchaseOrderItem<T extends Product$PurchaseOrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$PurchaseOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StockMovement<T extends Product$StockMovementArgs<ExtArgs> = {}>(args?: Subset<T, Product$StockMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly supplierId: FieldRef<"Product", 'String'>
    readonly productBrandId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly entryPrice: FieldRef<"Product", 'Float'>
    readonly unitPrice: FieldRef<"Product", 'Float'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly isDeleted: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.InventoryLevel
   */
  export type Product$InventoryLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    where?: InventoryLevelWhereInput
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    cursor?: InventoryLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLevelScalarFieldEnum | InventoryLevelScalarFieldEnum[]
  }

  /**
   * Product.ProductPriceHistory
   */
  export type Product$ProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    where?: ProductPriceHistoryWhereInput
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    cursor?: ProductPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * Product.PurchaseOrderItem
   */
  export type Product$PurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    where?: PurchaseOrderItemWhereInput
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    cursor?: PurchaseOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * Product.StockMovement
   */
  export type Product$StockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductBrand
   */

  export type AggregateProductBrand = {
    _count: ProductBrandCountAggregateOutputType | null
    _min: ProductBrandMinAggregateOutputType | null
    _max: ProductBrandMaxAggregateOutputType | null
  }

  export type ProductBrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductBrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductBrandCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductBrandMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductBrandMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductBrandCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBrand to aggregate.
     */
    where?: ProductBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBrands to fetch.
     */
    orderBy?: ProductBrandOrderByWithRelationInput | ProductBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBrands
    **/
    _count?: true | ProductBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBrandMaxAggregateInputType
  }

  export type GetProductBrandAggregateType<T extends ProductBrandAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBrand[P]>
      : GetScalarType<T[P], AggregateProductBrand[P]>
  }




  export type ProductBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBrandWhereInput
    orderBy?: ProductBrandOrderByWithAggregationInput | ProductBrandOrderByWithAggregationInput[]
    by: ProductBrandScalarFieldEnum[] | ProductBrandScalarFieldEnum
    having?: ProductBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBrandCountAggregateInputType | true
    _min?: ProductBrandMinAggregateInputType
    _max?: ProductBrandMaxAggregateInputType
  }

  export type ProductBrandGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProductBrandCountAggregateOutputType | null
    _min: ProductBrandMinAggregateOutputType | null
    _max: ProductBrandMaxAggregateOutputType | null
  }

  type GetProductBrandGroupByPayload<T extends ProductBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBrandGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBrandGroupByOutputType[P]>
        }
      >
    >


  export type ProductBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductBrand$ProductArgs<ExtArgs>
    _count?: boolean | ProductBrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBrand"]>



  export type ProductBrandSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductBrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["productBrand"]>
  export type ProductBrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductBrand$ProductArgs<ExtArgs>
    _count?: boolean | ProductBrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBrand"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productBrand"]>
    composites: {}
  }

  type ProductBrandGetPayload<S extends boolean | null | undefined | ProductBrandDefaultArgs> = $Result.GetResult<Prisma.$ProductBrandPayload, S>

  type ProductBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductBrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductBrandCountAggregateInputType | true
    }

  export interface ProductBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBrand'], meta: { name: 'ProductBrand' } }
    /**
     * Find zero or one ProductBrand that matches the filter.
     * @param {ProductBrandFindUniqueArgs} args - Arguments to find a ProductBrand
     * @example
     * // Get one ProductBrand
     * const productBrand = await prisma.productBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBrandFindUniqueArgs>(args: SelectSubset<T, ProductBrandFindUniqueArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductBrand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductBrandFindUniqueOrThrowArgs} args - Arguments to find a ProductBrand
     * @example
     * // Get one ProductBrand
     * const productBrand = await prisma.productBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandFindFirstArgs} args - Arguments to find a ProductBrand
     * @example
     * // Get one ProductBrand
     * const productBrand = await prisma.productBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBrandFindFirstArgs>(args?: SelectSubset<T, ProductBrandFindFirstArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandFindFirstOrThrowArgs} args - Arguments to find a ProductBrand
     * @example
     * // Get one ProductBrand
     * const productBrand = await prisma.productBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBrands
     * const productBrands = await prisma.productBrand.findMany()
     * 
     * // Get first 10 ProductBrands
     * const productBrands = await prisma.productBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productBrandWithIdOnly = await prisma.productBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductBrandFindManyArgs>(args?: SelectSubset<T, ProductBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductBrand.
     * @param {ProductBrandCreateArgs} args - Arguments to create a ProductBrand.
     * @example
     * // Create one ProductBrand
     * const ProductBrand = await prisma.productBrand.create({
     *   data: {
     *     // ... data to create a ProductBrand
     *   }
     * })
     * 
     */
    create<T extends ProductBrandCreateArgs>(args: SelectSubset<T, ProductBrandCreateArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductBrands.
     * @param {ProductBrandCreateManyArgs} args - Arguments to create many ProductBrands.
     * @example
     * // Create many ProductBrands
     * const productBrand = await prisma.productBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBrandCreateManyArgs>(args?: SelectSubset<T, ProductBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductBrand.
     * @param {ProductBrandDeleteArgs} args - Arguments to delete one ProductBrand.
     * @example
     * // Delete one ProductBrand
     * const ProductBrand = await prisma.productBrand.delete({
     *   where: {
     *     // ... filter to delete one ProductBrand
     *   }
     * })
     * 
     */
    delete<T extends ProductBrandDeleteArgs>(args: SelectSubset<T, ProductBrandDeleteArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductBrand.
     * @param {ProductBrandUpdateArgs} args - Arguments to update one ProductBrand.
     * @example
     * // Update one ProductBrand
     * const productBrand = await prisma.productBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBrandUpdateArgs>(args: SelectSubset<T, ProductBrandUpdateArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductBrands.
     * @param {ProductBrandDeleteManyArgs} args - Arguments to filter ProductBrands to delete.
     * @example
     * // Delete a few ProductBrands
     * const { count } = await prisma.productBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBrandDeleteManyArgs>(args?: SelectSubset<T, ProductBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBrands
     * const productBrand = await prisma.productBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBrandUpdateManyArgs>(args: SelectSubset<T, ProductBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductBrand.
     * @param {ProductBrandUpsertArgs} args - Arguments to update or create a ProductBrand.
     * @example
     * // Update or create a ProductBrand
     * const productBrand = await prisma.productBrand.upsert({
     *   create: {
     *     // ... data to create a ProductBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBrand we want to update
     *   }
     * })
     */
    upsert<T extends ProductBrandUpsertArgs>(args: SelectSubset<T, ProductBrandUpsertArgs<ExtArgs>>): Prisma__ProductBrandClient<$Result.GetResult<Prisma.$ProductBrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandCountArgs} args - Arguments to filter ProductBrands to count.
     * @example
     * // Count the number of ProductBrands
     * const count = await prisma.productBrand.count({
     *   where: {
     *     // ... the filter for the ProductBrands we want to count
     *   }
     * })
    **/
    count<T extends ProductBrandCountArgs>(
      args?: Subset<T, ProductBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductBrandAggregateArgs>(args: Subset<T, ProductBrandAggregateArgs>): Prisma.PrismaPromise<GetProductBrandAggregateType<T>>

    /**
     * Group by ProductBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBrandGroupByArgs['orderBy'] }
        : { orderBy?: ProductBrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBrand model
   */
  readonly fields: ProductBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductBrand$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductBrand$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductBrand model
   */
  interface ProductBrandFieldRefs {
    readonly id: FieldRef<"ProductBrand", 'String'>
    readonly name: FieldRef<"ProductBrand", 'String'>
    readonly createdAt: FieldRef<"ProductBrand", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductBrand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductBrand findUnique
   */
  export type ProductBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter, which ProductBrand to fetch.
     */
    where: ProductBrandWhereUniqueInput
  }

  /**
   * ProductBrand findUniqueOrThrow
   */
  export type ProductBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter, which ProductBrand to fetch.
     */
    where: ProductBrandWhereUniqueInput
  }

  /**
   * ProductBrand findFirst
   */
  export type ProductBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter, which ProductBrand to fetch.
     */
    where?: ProductBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBrands to fetch.
     */
    orderBy?: ProductBrandOrderByWithRelationInput | ProductBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBrands.
     */
    cursor?: ProductBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBrands.
     */
    distinct?: ProductBrandScalarFieldEnum | ProductBrandScalarFieldEnum[]
  }

  /**
   * ProductBrand findFirstOrThrow
   */
  export type ProductBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter, which ProductBrand to fetch.
     */
    where?: ProductBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBrands to fetch.
     */
    orderBy?: ProductBrandOrderByWithRelationInput | ProductBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBrands.
     */
    cursor?: ProductBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBrands.
     */
    distinct?: ProductBrandScalarFieldEnum | ProductBrandScalarFieldEnum[]
  }

  /**
   * ProductBrand findMany
   */
  export type ProductBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter, which ProductBrands to fetch.
     */
    where?: ProductBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBrands to fetch.
     */
    orderBy?: ProductBrandOrderByWithRelationInput | ProductBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBrands.
     */
    cursor?: ProductBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBrands.
     */
    skip?: number
    distinct?: ProductBrandScalarFieldEnum | ProductBrandScalarFieldEnum[]
  }

  /**
   * ProductBrand create
   */
  export type ProductBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBrand.
     */
    data: XOR<ProductBrandCreateInput, ProductBrandUncheckedCreateInput>
  }

  /**
   * ProductBrand createMany
   */
  export type ProductBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBrands.
     */
    data: ProductBrandCreateManyInput | ProductBrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBrand update
   */
  export type ProductBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBrand.
     */
    data: XOR<ProductBrandUpdateInput, ProductBrandUncheckedUpdateInput>
    /**
     * Choose, which ProductBrand to update.
     */
    where: ProductBrandWhereUniqueInput
  }

  /**
   * ProductBrand updateMany
   */
  export type ProductBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBrands.
     */
    data: XOR<ProductBrandUpdateManyMutationInput, ProductBrandUncheckedUpdateManyInput>
    /**
     * Filter which ProductBrands to update
     */
    where?: ProductBrandWhereInput
    /**
     * Limit how many ProductBrands to update.
     */
    limit?: number
  }

  /**
   * ProductBrand upsert
   */
  export type ProductBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBrand to update in case it exists.
     */
    where: ProductBrandWhereUniqueInput
    /**
     * In case the ProductBrand found by the `where` argument doesn't exist, create a new ProductBrand with this data.
     */
    create: XOR<ProductBrandCreateInput, ProductBrandUncheckedCreateInput>
    /**
     * In case the ProductBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBrandUpdateInput, ProductBrandUncheckedUpdateInput>
  }

  /**
   * ProductBrand delete
   */
  export type ProductBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
    /**
     * Filter which ProductBrand to delete.
     */
    where: ProductBrandWhereUniqueInput
  }

  /**
   * ProductBrand deleteMany
   */
  export type ProductBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBrands to delete
     */
    where?: ProductBrandWhereInput
    /**
     * Limit how many ProductBrands to delete.
     */
    limit?: number
  }

  /**
   * ProductBrand.Product
   */
  export type ProductBrand$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductBrand without action
   */
  export type ProductBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBrand
     */
    select?: ProductBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBrand
     */
    omit?: ProductBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBrandInclude<ExtArgs> | null
  }


  /**
   * Model InventoryLevel
   */

  export type AggregateInventoryLevel = {
    _count: InventoryLevelCountAggregateOutputType | null
    _avg: InventoryLevelAvgAggregateOutputType | null
    _sum: InventoryLevelSumAggregateOutputType | null
    _min: InventoryLevelMinAggregateOutputType | null
    _max: InventoryLevelMaxAggregateOutputType | null
  }

  export type InventoryLevelAvgAggregateOutputType = {
    quantity: number | null
    minStock: number | null
  }

  export type InventoryLevelSumAggregateOutputType = {
    quantity: number | null
    minStock: number | null
  }

  export type InventoryLevelMinAggregateOutputType = {
    id: string | null
    productId: string | null
    warehouseId: string | null
    quantity: number | null
    minStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryLevelMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    warehouseId: string | null
    quantity: number | null
    minStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryLevelCountAggregateOutputType = {
    id: number
    productId: number
    warehouseId: number
    quantity: number
    minStock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryLevelAvgAggregateInputType = {
    quantity?: true
    minStock?: true
  }

  export type InventoryLevelSumAggregateInputType = {
    quantity?: true
    minStock?: true
  }

  export type InventoryLevelMinAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantity?: true
    minStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryLevelMaxAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantity?: true
    minStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryLevelCountAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantity?: true
    minStock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLevel to aggregate.
     */
    where?: InventoryLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLevels to fetch.
     */
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLevels
    **/
    _count?: true | InventoryLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLevelMaxAggregateInputType
  }

  export type GetInventoryLevelAggregateType<T extends InventoryLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLevel[P]>
      : GetScalarType<T[P], AggregateInventoryLevel[P]>
  }




  export type InventoryLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLevelWhereInput
    orderBy?: InventoryLevelOrderByWithAggregationInput | InventoryLevelOrderByWithAggregationInput[]
    by: InventoryLevelScalarFieldEnum[] | InventoryLevelScalarFieldEnum
    having?: InventoryLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLevelCountAggregateInputType | true
    _avg?: InventoryLevelAvgAggregateInputType
    _sum?: InventoryLevelSumAggregateInputType
    _min?: InventoryLevelMinAggregateInputType
    _max?: InventoryLevelMaxAggregateInputType
  }

  export type InventoryLevelGroupByOutputType = {
    id: string
    productId: string
    warehouseId: string
    quantity: number
    minStock: number
    createdAt: Date
    updatedAt: Date
    _count: InventoryLevelCountAggregateOutputType | null
    _avg: InventoryLevelAvgAggregateOutputType | null
    _sum: InventoryLevelSumAggregateOutputType | null
    _min: InventoryLevelMinAggregateOutputType | null
    _max: InventoryLevelMaxAggregateOutputType | null
  }

  type GetInventoryLevelGroupByPayload<T extends InventoryLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLevelGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLevelGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    minStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLevel"]>



  export type InventoryLevelSelectScalar = {
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    minStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "warehouseId" | "quantity" | "minStock" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryLevel"]>
  export type InventoryLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }

  export type $InventoryLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLevel"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      warehouse: Prisma.$WareHousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      warehouseId: string
      quantity: number
      minStock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryLevel"]>
    composites: {}
  }

  type InventoryLevelGetPayload<S extends boolean | null | undefined | InventoryLevelDefaultArgs> = $Result.GetResult<Prisma.$InventoryLevelPayload, S>

  type InventoryLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryLevelCountAggregateInputType | true
    }

  export interface InventoryLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLevel'], meta: { name: 'InventoryLevel' } }
    /**
     * Find zero or one InventoryLevel that matches the filter.
     * @param {InventoryLevelFindUniqueArgs} args - Arguments to find a InventoryLevel
     * @example
     * // Get one InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLevelFindUniqueArgs>(args: SelectSubset<T, InventoryLevelFindUniqueArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryLevelFindUniqueOrThrowArgs} args - Arguments to find a InventoryLevel
     * @example
     * // Get one InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelFindFirstArgs} args - Arguments to find a InventoryLevel
     * @example
     * // Get one InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLevelFindFirstArgs>(args?: SelectSubset<T, InventoryLevelFindFirstArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelFindFirstOrThrowArgs} args - Arguments to find a InventoryLevel
     * @example
     * // Get one InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLevels
     * const inventoryLevels = await prisma.inventoryLevel.findMany()
     * 
     * // Get first 10 InventoryLevels
     * const inventoryLevels = await prisma.inventoryLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLevelWithIdOnly = await prisma.inventoryLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLevelFindManyArgs>(args?: SelectSubset<T, InventoryLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryLevel.
     * @param {InventoryLevelCreateArgs} args - Arguments to create a InventoryLevel.
     * @example
     * // Create one InventoryLevel
     * const InventoryLevel = await prisma.inventoryLevel.create({
     *   data: {
     *     // ... data to create a InventoryLevel
     *   }
     * })
     * 
     */
    create<T extends InventoryLevelCreateArgs>(args: SelectSubset<T, InventoryLevelCreateArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryLevels.
     * @param {InventoryLevelCreateManyArgs} args - Arguments to create many InventoryLevels.
     * @example
     * // Create many InventoryLevels
     * const inventoryLevel = await prisma.inventoryLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLevelCreateManyArgs>(args?: SelectSubset<T, InventoryLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryLevel.
     * @param {InventoryLevelDeleteArgs} args - Arguments to delete one InventoryLevel.
     * @example
     * // Delete one InventoryLevel
     * const InventoryLevel = await prisma.inventoryLevel.delete({
     *   where: {
     *     // ... filter to delete one InventoryLevel
     *   }
     * })
     * 
     */
    delete<T extends InventoryLevelDeleteArgs>(args: SelectSubset<T, InventoryLevelDeleteArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryLevel.
     * @param {InventoryLevelUpdateArgs} args - Arguments to update one InventoryLevel.
     * @example
     * // Update one InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLevelUpdateArgs>(args: SelectSubset<T, InventoryLevelUpdateArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryLevels.
     * @param {InventoryLevelDeleteManyArgs} args - Arguments to filter InventoryLevels to delete.
     * @example
     * // Delete a few InventoryLevels
     * const { count } = await prisma.inventoryLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLevelDeleteManyArgs>(args?: SelectSubset<T, InventoryLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLevels
     * const inventoryLevel = await prisma.inventoryLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLevelUpdateManyArgs>(args: SelectSubset<T, InventoryLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryLevel.
     * @param {InventoryLevelUpsertArgs} args - Arguments to update or create a InventoryLevel.
     * @example
     * // Update or create a InventoryLevel
     * const inventoryLevel = await prisma.inventoryLevel.upsert({
     *   create: {
     *     // ... data to create a InventoryLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLevel we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLevelUpsertArgs>(args: SelectSubset<T, InventoryLevelUpsertArgs<ExtArgs>>): Prisma__InventoryLevelClient<$Result.GetResult<Prisma.$InventoryLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelCountArgs} args - Arguments to filter InventoryLevels to count.
     * @example
     * // Count the number of InventoryLevels
     * const count = await prisma.inventoryLevel.count({
     *   where: {
     *     // ... the filter for the InventoryLevels we want to count
     *   }
     * })
    **/
    count<T extends InventoryLevelCountArgs>(
      args?: Subset<T, InventoryLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLevelAggregateArgs>(args: Subset<T, InventoryLevelAggregateArgs>): Prisma.PrismaPromise<GetInventoryLevelAggregateType<T>>

    /**
     * Group by InventoryLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLevelGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLevel model
   */
  readonly fields: InventoryLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WareHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WareHouseDefaultArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLevel model
   */
  interface InventoryLevelFieldRefs {
    readonly id: FieldRef<"InventoryLevel", 'String'>
    readonly productId: FieldRef<"InventoryLevel", 'String'>
    readonly warehouseId: FieldRef<"InventoryLevel", 'String'>
    readonly quantity: FieldRef<"InventoryLevel", 'Int'>
    readonly minStock: FieldRef<"InventoryLevel", 'Int'>
    readonly createdAt: FieldRef<"InventoryLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLevel findUnique
   */
  export type InventoryLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLevel to fetch.
     */
    where: InventoryLevelWhereUniqueInput
  }

  /**
   * InventoryLevel findUniqueOrThrow
   */
  export type InventoryLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLevel to fetch.
     */
    where: InventoryLevelWhereUniqueInput
  }

  /**
   * InventoryLevel findFirst
   */
  export type InventoryLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLevel to fetch.
     */
    where?: InventoryLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLevels to fetch.
     */
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLevels.
     */
    cursor?: InventoryLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLevels.
     */
    distinct?: InventoryLevelScalarFieldEnum | InventoryLevelScalarFieldEnum[]
  }

  /**
   * InventoryLevel findFirstOrThrow
   */
  export type InventoryLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLevel to fetch.
     */
    where?: InventoryLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLevels to fetch.
     */
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLevels.
     */
    cursor?: InventoryLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLevels.
     */
    distinct?: InventoryLevelScalarFieldEnum | InventoryLevelScalarFieldEnum[]
  }

  /**
   * InventoryLevel findMany
   */
  export type InventoryLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLevels to fetch.
     */
    where?: InventoryLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLevels to fetch.
     */
    orderBy?: InventoryLevelOrderByWithRelationInput | InventoryLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLevels.
     */
    cursor?: InventoryLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLevels.
     */
    skip?: number
    distinct?: InventoryLevelScalarFieldEnum | InventoryLevelScalarFieldEnum[]
  }

  /**
   * InventoryLevel create
   */
  export type InventoryLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryLevel.
     */
    data: XOR<InventoryLevelCreateInput, InventoryLevelUncheckedCreateInput>
  }

  /**
   * InventoryLevel createMany
   */
  export type InventoryLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLevels.
     */
    data: InventoryLevelCreateManyInput | InventoryLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryLevel update
   */
  export type InventoryLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryLevel.
     */
    data: XOR<InventoryLevelUpdateInput, InventoryLevelUncheckedUpdateInput>
    /**
     * Choose, which InventoryLevel to update.
     */
    where: InventoryLevelWhereUniqueInput
  }

  /**
   * InventoryLevel updateMany
   */
  export type InventoryLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLevels.
     */
    data: XOR<InventoryLevelUpdateManyMutationInput, InventoryLevelUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLevels to update
     */
    where?: InventoryLevelWhereInput
    /**
     * Limit how many InventoryLevels to update.
     */
    limit?: number
  }

  /**
   * InventoryLevel upsert
   */
  export type InventoryLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryLevel to update in case it exists.
     */
    where: InventoryLevelWhereUniqueInput
    /**
     * In case the InventoryLevel found by the `where` argument doesn't exist, create a new InventoryLevel with this data.
     */
    create: XOR<InventoryLevelCreateInput, InventoryLevelUncheckedCreateInput>
    /**
     * In case the InventoryLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLevelUpdateInput, InventoryLevelUncheckedUpdateInput>
  }

  /**
   * InventoryLevel delete
   */
  export type InventoryLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
    /**
     * Filter which InventoryLevel to delete.
     */
    where: InventoryLevelWhereUniqueInput
  }

  /**
   * InventoryLevel deleteMany
   */
  export type InventoryLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLevels to delete
     */
    where?: InventoryLevelWhereInput
    /**
     * Limit how many InventoryLevels to delete.
     */
    limit?: number
  }

  /**
   * InventoryLevel without action
   */
  export type InventoryLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLevel
     */
    select?: InventoryLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLevel
     */
    omit?: InventoryLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLevelInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    userId: string | null
    orderDate: Date | null
    status: $Enums.PurchaseOrderStatus | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    userId: string | null
    orderDate: Date | null
    status: $Enums.PurchaseOrderStatus | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    supplierId: number
    userId: number
    orderDate: number
    status: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    supplierId?: true
    userId?: true
    orderDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    supplierId?: true
    userId?: true
    orderDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    supplierId?: true
    userId?: true
    orderDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: string
    supplierId: string
    userId: string
    orderDate: Date
    status: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    userId?: boolean
    orderDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    PurchaseOrderItem?: boolean | PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>



  export type PurchaseOrderSelectScalar = {
    id?: boolean
    supplierId?: boolean
    userId?: boolean
    orderDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "userId" | "orderDate" | "status" | "totalAmount" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderItem?: boolean | PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      PurchaseOrderItem: Prisma.$PurchaseOrderItemPayload<ExtArgs>[]
      supplier: Prisma.$SupplierPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      userId: string
      orderDate: Date
      status: $Enums.PurchaseOrderStatus
      totalAmount: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PurchaseOrderItem<T extends PurchaseOrder$PurchaseOrderItemArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'String'>
    readonly supplierId: FieldRef<"PurchaseOrder", 'String'>
    readonly userId: FieldRef<"PurchaseOrder", 'String'>
    readonly orderDate: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly status: FieldRef<"PurchaseOrder", 'PurchaseOrderStatus'>
    readonly totalAmount: FieldRef<"PurchaseOrder", 'Float'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly isDeleted: FieldRef<"PurchaseOrder", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.PurchaseOrderItem
   */
  export type PurchaseOrder$PurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    where?: PurchaseOrderItemWhereInput
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    cursor?: PurchaseOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrderItem
   */

  export type AggregatePurchaseOrderItem = {
    _count: PurchaseOrderItemCountAggregateOutputType | null
    _avg: PurchaseOrderItemAvgAggregateOutputType | null
    _sum: PurchaseOrderItemSumAggregateOutputType | null
    _min: PurchaseOrderItemMinAggregateOutputType | null
    _max: PurchaseOrderItemMaxAggregateOutputType | null
  }

  export type PurchaseOrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type PurchaseOrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type PurchaseOrderItemMinAggregateOutputType = {
    id: string | null
    purchaseOrderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderItemMaxAggregateOutputType = {
    id: string | null
    purchaseOrderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderItemCountAggregateOutputType = {
    id: number
    purchaseOrderId: number
    productId: number
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type PurchaseOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type PurchaseOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type PurchaseOrderItemMinAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderItemMaxAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderItemCountAggregateInputType = {
    id?: true
    purchaseOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type PurchaseOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderItem to aggregate.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrderItems
    **/
    _count?: true | PurchaseOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderItemMaxAggregateInputType
  }

  export type GetPurchaseOrderItemAggregateType<T extends PurchaseOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrderItem[P]>
      : GetScalarType<T[P], AggregatePurchaseOrderItem[P]>
  }




  export type PurchaseOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderItemWhereInput
    orderBy?: PurchaseOrderItemOrderByWithAggregationInput | PurchaseOrderItemOrderByWithAggregationInput[]
    by: PurchaseOrderItemScalarFieldEnum[] | PurchaseOrderItemScalarFieldEnum
    having?: PurchaseOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderItemCountAggregateInputType | true
    _avg?: PurchaseOrderItemAvgAggregateInputType
    _sum?: PurchaseOrderItemSumAggregateInputType
    _min?: PurchaseOrderItemMinAggregateInputType
    _max?: PurchaseOrderItemMaxAggregateInputType
  }

  export type PurchaseOrderItemGroupByOutputType = {
    id: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: PurchaseOrderItemCountAggregateOutputType | null
    _avg: PurchaseOrderItemAvgAggregateOutputType | null
    _sum: PurchaseOrderItemSumAggregateOutputType | null
    _min: PurchaseOrderItemMinAggregateOutputType | null
    _max: PurchaseOrderItemMaxAggregateOutputType | null
  }

  type GetPurchaseOrderItemGroupByPayload<T extends PurchaseOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderItem"]>



  export type PurchaseOrderItemSelectScalar = {
    id?: boolean
    purchaseOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type PurchaseOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseOrderId" | "productId" | "quantity" | "unitPrice" | "subtotal" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["purchaseOrderItem"]>
  export type PurchaseOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrderItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseOrderId: string
      productId: string
      quantity: number
      unitPrice: number
      subtotal: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["purchaseOrderItem"]>
    composites: {}
  }

  type PurchaseOrderItemGetPayload<S extends boolean | null | undefined | PurchaseOrderItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderItemPayload, S>

  type PurchaseOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderItemCountAggregateInputType | true
    }

  export interface PurchaseOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderItem'], meta: { name: 'PurchaseOrderItem' } }
    /**
     * Find zero or one PurchaseOrderItem that matches the filter.
     * @param {PurchaseOrderItemFindUniqueArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderItemFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindFirstArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderItemFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrderItems
     * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany()
     * 
     * // Get first 10 PurchaseOrderItems
     * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderItemWithIdOnly = await prisma.purchaseOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderItemFindManyArgs>(args?: SelectSubset<T, PurchaseOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrderItem.
     * @param {PurchaseOrderItemCreateArgs} args - Arguments to create a PurchaseOrderItem.
     * @example
     * // Create one PurchaseOrderItem
     * const PurchaseOrderItem = await prisma.purchaseOrderItem.create({
     *   data: {
     *     // ... data to create a PurchaseOrderItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderItemCreateArgs>(args: SelectSubset<T, PurchaseOrderItemCreateArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrderItems.
     * @param {PurchaseOrderItemCreateManyArgs} args - Arguments to create many PurchaseOrderItems.
     * @example
     * // Create many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderItemCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurchaseOrderItem.
     * @param {PurchaseOrderItemDeleteArgs} args - Arguments to delete one PurchaseOrderItem.
     * @example
     * // Delete one PurchaseOrderItem
     * const PurchaseOrderItem = await prisma.purchaseOrderItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrderItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderItemDeleteArgs>(args: SelectSubset<T, PurchaseOrderItemDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrderItem.
     * @param {PurchaseOrderItemUpdateArgs} args - Arguments to update one PurchaseOrderItem.
     * @example
     * // Update one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderItemUpdateArgs>(args: SelectSubset<T, PurchaseOrderItemUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrderItems.
     * @param {PurchaseOrderItemDeleteManyArgs} args - Arguments to filter PurchaseOrderItems to delete.
     * @example
     * // Delete a few PurchaseOrderItems
     * const { count } = await prisma.purchaseOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderItemUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseOrderItem.
     * @param {PurchaseOrderItemUpsertArgs} args - Arguments to update or create a PurchaseOrderItem.
     * @example
     * // Update or create a PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderItemUpsertArgs>(args: SelectSubset<T, PurchaseOrderItemUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemCountArgs} args - Arguments to filter PurchaseOrderItems to count.
     * @example
     * // Count the number of PurchaseOrderItems
     * const count = await prisma.purchaseOrderItem.count({
     *   where: {
     *     // ... the filter for the PurchaseOrderItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderItemCountArgs>(
      args?: Subset<T, PurchaseOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderItemAggregateArgs>(args: Subset<T, PurchaseOrderItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderItemAggregateType<T>>

    /**
     * Group by PurchaseOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrderItem model
   */
  readonly fields: PurchaseOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrderItem model
   */
  interface PurchaseOrderItemFieldRefs {
    readonly id: FieldRef<"PurchaseOrderItem", 'String'>
    readonly purchaseOrderId: FieldRef<"PurchaseOrderItem", 'String'>
    readonly productId: FieldRef<"PurchaseOrderItem", 'String'>
    readonly quantity: FieldRef<"PurchaseOrderItem", 'Int'>
    readonly unitPrice: FieldRef<"PurchaseOrderItem", 'Float'>
    readonly subtotal: FieldRef<"PurchaseOrderItem", 'Float'>
    readonly createdAt: FieldRef<"PurchaseOrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrderItem", 'DateTime'>
    readonly isDeleted: FieldRef<"PurchaseOrderItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrderItem findUnique
   */
  export type PurchaseOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem findUniqueOrThrow
   */
  export type PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem findFirst
   */
  export type PurchaseOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderItems.
     */
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem findFirstOrThrow
   */
  export type PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderItems.
     */
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem findMany
   */
  export type PurchaseOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItems to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem create
   */
  export type PurchaseOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrderItem.
     */
    data: XOR<PurchaseOrderItemCreateInput, PurchaseOrderItemUncheckedCreateInput>
  }

  /**
   * PurchaseOrderItem createMany
   */
  export type PurchaseOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrderItems.
     */
    data: PurchaseOrderItemCreateManyInput | PurchaseOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrderItem update
   */
  export type PurchaseOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrderItem.
     */
    data: XOR<PurchaseOrderItemUpdateInput, PurchaseOrderItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrderItem to update.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem updateMany
   */
  export type PurchaseOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrderItems.
     */
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderItems to update
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * Limit how many PurchaseOrderItems to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrderItem upsert
   */
  export type PurchaseOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrderItem to update in case it exists.
     */
    where: PurchaseOrderItemWhereUniqueInput
    /**
     * In case the PurchaseOrderItem found by the `where` argument doesn't exist, create a new PurchaseOrderItem with this data.
     */
    create: XOR<PurchaseOrderItemCreateInput, PurchaseOrderItemUncheckedCreateInput>
    /**
     * In case the PurchaseOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderItemUpdateInput, PurchaseOrderItemUncheckedUpdateInput>
  }

  /**
   * PurchaseOrderItem delete
   */
  export type PurchaseOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrderItem to delete.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem deleteMany
   */
  export type PurchaseOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderItems to delete
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * Limit how many PurchaseOrderItems to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrderItem without action
   */
  export type PurchaseOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    fromWarehouseId: string | null
    toWarehouseId: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    fromWarehouseId: string | null
    toWarehouseId: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    fromWarehouseId: number
    toWarehouseId: number
    userId: number
    productId: number
    quantity: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    fromWarehouseId?: true
    toWarehouseId?: true
    userId?: true
    productId?: true
    quantity?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    fromWarehouseId?: true
    toWarehouseId?: true
    userId?: true
    productId?: true
    quantity?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    fromWarehouseId?: true
    toWarehouseId?: true
    userId?: true
    productId?: true
    quantity?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    fromWarehouseId: string | null
    toWarehouseId: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt: Date
    updatedAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromWarehouseId?: boolean
    toWarehouseId?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromWarehouse?: boolean | StockMovement$fromWarehouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    toWarehouse?: boolean | StockMovement$toWarehouseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>



  export type StockMovementSelectScalar = {
    id?: boolean
    fromWarehouseId?: boolean
    toWarehouseId?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromWarehouseId" | "toWarehouseId" | "userId" | "productId" | "quantity" | "reason" | "createdAt" | "updatedAt", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromWarehouse?: boolean | StockMovement$fromWarehouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    toWarehouse?: boolean | StockMovement$toWarehouseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      fromWarehouse: Prisma.$WareHousePayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
      toWarehouse: Prisma.$WareHousePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromWarehouseId: string | null
      toWarehouseId: string | null
      userId: string
      productId: string
      quantity: number
      reason: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromWarehouse<T extends StockMovement$fromWarehouseArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$fromWarehouseArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toWarehouse<T extends StockMovement$toWarehouseArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$toWarehouseArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly fromWarehouseId: FieldRef<"StockMovement", 'String'>
    readonly toWarehouseId: FieldRef<"StockMovement", 'String'>
    readonly userId: FieldRef<"StockMovement", 'String'>
    readonly productId: FieldRef<"StockMovement", 'String'>
    readonly quantity: FieldRef<"StockMovement", 'Int'>
    readonly reason: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
    readonly updatedAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement.fromWarehouse
   */
  export type StockMovement$fromWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    where?: WareHouseWhereInput
  }

  /**
   * StockMovement.toWarehouse
   */
  export type StockMovement$toWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    where?: WareHouseWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model ProductPriceHistory
   */

  export type AggregateProductPriceHistory = {
    _count: ProductPriceHistoryCountAggregateOutputType | null
    _avg: ProductPriceHistoryAvgAggregateOutputType | null
    _sum: ProductPriceHistorySumAggregateOutputType | null
    _min: ProductPriceHistoryMinAggregateOutputType | null
    _max: ProductPriceHistoryMaxAggregateOutputType | null
  }

  export type ProductPriceHistoryAvgAggregateOutputType = {
    previousPrice: number | null
    newPrice: number | null
  }

  export type ProductPriceHistorySumAggregateOutputType = {
    previousPrice: number | null
    newPrice: number | null
  }

  export type ProductPriceHistoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    previousPrice: number | null
    newPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPriceHistoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    previousPrice: number | null
    newPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPriceHistoryCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    previousPrice: number
    newPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductPriceHistoryAvgAggregateInputType = {
    previousPrice?: true
    newPrice?: true
  }

  export type ProductPriceHistorySumAggregateInputType = {
    previousPrice?: true
    newPrice?: true
  }

  export type ProductPriceHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    previousPrice?: true
    newPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPriceHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    previousPrice?: true
    newPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPriceHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    previousPrice?: true
    newPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductPriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceHistory to aggregate.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPriceHistories
    **/
    _count?: true | ProductPriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceHistoryMaxAggregateInputType
  }

  export type GetProductPriceHistoryAggregateType<T extends ProductPriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPriceHistory[P]>
      : GetScalarType<T[P], AggregateProductPriceHistory[P]>
  }




  export type ProductPriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceHistoryWhereInput
    orderBy?: ProductPriceHistoryOrderByWithAggregationInput | ProductPriceHistoryOrderByWithAggregationInput[]
    by: ProductPriceHistoryScalarFieldEnum[] | ProductPriceHistoryScalarFieldEnum
    having?: ProductPriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceHistoryCountAggregateInputType | true
    _avg?: ProductPriceHistoryAvgAggregateInputType
    _sum?: ProductPriceHistorySumAggregateInputType
    _min?: ProductPriceHistoryMinAggregateInputType
    _max?: ProductPriceHistoryMaxAggregateInputType
  }

  export type ProductPriceHistoryGroupByOutputType = {
    id: string
    productId: string
    userId: string
    previousPrice: number
    newPrice: number
    createdAt: Date
    updatedAt: Date
    _count: ProductPriceHistoryCountAggregateOutputType | null
    _avg: ProductPriceHistoryAvgAggregateOutputType | null
    _sum: ProductPriceHistorySumAggregateOutputType | null
    _min: ProductPriceHistoryMinAggregateOutputType | null
    _max: ProductPriceHistoryMaxAggregateOutputType | null
  }

  type GetProductPriceHistoryGroupByPayload<T extends ProductPriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    previousPrice?: boolean
    newPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPriceHistory"]>



  export type ProductPriceHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    previousPrice?: boolean
    newPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductPriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "previousPrice" | "newPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["productPriceHistory"]>
  export type ProductPriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPriceHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string
      previousPrice: number
      newPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productPriceHistory"]>
    composites: {}
  }

  type ProductPriceHistoryGetPayload<S extends boolean | null | undefined | ProductPriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProductPriceHistoryPayload, S>

  type ProductPriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceHistoryCountAggregateInputType | true
    }

  export interface ProductPriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPriceHistory'], meta: { name: 'ProductPriceHistory' } }
    /**
     * Find zero or one ProductPriceHistory that matches the filter.
     * @param {ProductPriceHistoryFindUniqueArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceHistoryFindUniqueArgs>(args: SelectSubset<T, ProductPriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindFirstArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceHistoryFindFirstArgs>(args?: SelectSubset<T, ProductPriceHistoryFindFirstArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindFirstOrThrowArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPriceHistories
     * const productPriceHistories = await prisma.productPriceHistory.findMany()
     * 
     * // Get first 10 ProductPriceHistories
     * const productPriceHistories = await prisma.productPriceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceHistoryWithIdOnly = await prisma.productPriceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceHistoryFindManyArgs>(args?: SelectSubset<T, ProductPriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPriceHistory.
     * @param {ProductPriceHistoryCreateArgs} args - Arguments to create a ProductPriceHistory.
     * @example
     * // Create one ProductPriceHistory
     * const ProductPriceHistory = await prisma.productPriceHistory.create({
     *   data: {
     *     // ... data to create a ProductPriceHistory
     *   }
     * })
     * 
     */
    create<T extends ProductPriceHistoryCreateArgs>(args: SelectSubset<T, ProductPriceHistoryCreateArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPriceHistories.
     * @param {ProductPriceHistoryCreateManyArgs} args - Arguments to create many ProductPriceHistories.
     * @example
     * // Create many ProductPriceHistories
     * const productPriceHistory = await prisma.productPriceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceHistoryCreateManyArgs>(args?: SelectSubset<T, ProductPriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductPriceHistory.
     * @param {ProductPriceHistoryDeleteArgs} args - Arguments to delete one ProductPriceHistory.
     * @example
     * // Delete one ProductPriceHistory
     * const ProductPriceHistory = await prisma.productPriceHistory.delete({
     *   where: {
     *     // ... filter to delete one ProductPriceHistory
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceHistoryDeleteArgs>(args: SelectSubset<T, ProductPriceHistoryDeleteArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPriceHistory.
     * @param {ProductPriceHistoryUpdateArgs} args - Arguments to update one ProductPriceHistory.
     * @example
     * // Update one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceHistoryUpdateArgs>(args: SelectSubset<T, ProductPriceHistoryUpdateArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPriceHistories.
     * @param {ProductPriceHistoryDeleteManyArgs} args - Arguments to filter ProductPriceHistories to delete.
     * @example
     * // Delete a few ProductPriceHistories
     * const { count } = await prisma.productPriceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceHistoryDeleteManyArgs>(args?: SelectSubset<T, ProductPriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPriceHistories
     * const productPriceHistory = await prisma.productPriceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceHistoryUpdateManyArgs>(args: SelectSubset<T, ProductPriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPriceHistory.
     * @param {ProductPriceHistoryUpsertArgs} args - Arguments to update or create a ProductPriceHistory.
     * @example
     * // Update or create a ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.upsert({
     *   create: {
     *     // ... data to create a ProductPriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceHistoryUpsertArgs>(args: SelectSubset<T, ProductPriceHistoryUpsertArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryCountArgs} args - Arguments to filter ProductPriceHistories to count.
     * @example
     * // Count the number of ProductPriceHistories
     * const count = await prisma.productPriceHistory.count({
     *   where: {
     *     // ... the filter for the ProductPriceHistories we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceHistoryCountArgs>(
      args?: Subset<T, ProductPriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPriceHistoryAggregateArgs>(args: Subset<T, ProductPriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductPriceHistoryAggregateType<T>>

    /**
     * Group by ProductPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPriceHistory model
   */
  readonly fields: ProductPriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPriceHistory model
   */
  interface ProductPriceHistoryFieldRefs {
    readonly id: FieldRef<"ProductPriceHistory", 'String'>
    readonly productId: FieldRef<"ProductPriceHistory", 'String'>
    readonly userId: FieldRef<"ProductPriceHistory", 'String'>
    readonly previousPrice: FieldRef<"ProductPriceHistory", 'Float'>
    readonly newPrice: FieldRef<"ProductPriceHistory", 'Float'>
    readonly createdAt: FieldRef<"ProductPriceHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductPriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPriceHistory findUnique
   */
  export type ProductPriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory findUniqueOrThrow
   */
  export type ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory findFirst
   */
  export type ProductPriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceHistories.
     */
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory findFirstOrThrow
   */
  export type ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceHistories.
     */
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory findMany
   */
  export type ProductPriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistories to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory create
   */
  export type ProductPriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPriceHistory.
     */
    data: XOR<ProductPriceHistoryCreateInput, ProductPriceHistoryUncheckedCreateInput>
  }

  /**
   * ProductPriceHistory createMany
   */
  export type ProductPriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPriceHistories.
     */
    data: ProductPriceHistoryCreateManyInput | ProductPriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPriceHistory update
   */
  export type ProductPriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPriceHistory.
     */
    data: XOR<ProductPriceHistoryUpdateInput, ProductPriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProductPriceHistory to update.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory updateMany
   */
  export type ProductPriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPriceHistories.
     */
    data: XOR<ProductPriceHistoryUpdateManyMutationInput, ProductPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductPriceHistories to update
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * Limit how many ProductPriceHistories to update.
     */
    limit?: number
  }

  /**
   * ProductPriceHistory upsert
   */
  export type ProductPriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPriceHistory to update in case it exists.
     */
    where: ProductPriceHistoryWhereUniqueInput
    /**
     * In case the ProductPriceHistory found by the `where` argument doesn't exist, create a new ProductPriceHistory with this data.
     */
    create: XOR<ProductPriceHistoryCreateInput, ProductPriceHistoryUncheckedCreateInput>
    /**
     * In case the ProductPriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceHistoryUpdateInput, ProductPriceHistoryUncheckedUpdateInput>
  }

  /**
   * ProductPriceHistory delete
   */
  export type ProductPriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProductPriceHistory to delete.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory deleteMany
   */
  export type ProductPriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceHistories to delete
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * Limit how many ProductPriceHistories to delete.
     */
    limit?: number
  }

  /**
   * ProductPriceHistory without action
   */
  export type ProductPriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WareHouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type WareHouseScalarFieldEnum = (typeof WareHouseScalarFieldEnum)[keyof typeof WareHouseScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    supplierId: 'supplierId',
    productBrandId: 'productBrandId',
    name: 'name',
    sku: 'sku',
    description: 'description',
    entryPrice: 'entryPrice',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductBrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductBrandScalarFieldEnum = (typeof ProductBrandScalarFieldEnum)[keyof typeof ProductBrandScalarFieldEnum]


  export const InventoryLevelScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId',
    quantity: 'quantity',
    minStock: 'minStock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryLevelScalarFieldEnum = (typeof InventoryLevelScalarFieldEnum)[keyof typeof InventoryLevelScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    userId: 'userId',
    orderDate: 'orderDate',
    status: 'status',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const PurchaseOrderItemScalarFieldEnum: {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type PurchaseOrderItemScalarFieldEnum = (typeof PurchaseOrderItemScalarFieldEnum)[keyof typeof PurchaseOrderItemScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    fromWarehouseId: 'fromWarehouseId',
    toWarehouseId: 'toWarehouseId',
    userId: 'userId',
    productId: 'productId',
    quantity: 'quantity',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const ProductPriceHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    previousPrice: 'previousPrice',
    newPrice: 'newPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductPriceHistoryScalarFieldEnum = (typeof ProductPriceHistoryScalarFieldEnum)[keyof typeof ProductPriceHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const WareHouseOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type WareHouseOrderByRelevanceFieldEnum = (typeof WareHouseOrderByRelevanceFieldEnum)[keyof typeof WareHouseOrderByRelevanceFieldEnum]


  export const SupplierOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type SupplierOrderByRelevanceFieldEnum = (typeof SupplierOrderByRelevanceFieldEnum)[keyof typeof SupplierOrderByRelevanceFieldEnum]


  export const ProductCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProductCategoryOrderByRelevanceFieldEnum = (typeof ProductCategoryOrderByRelevanceFieldEnum)[keyof typeof ProductCategoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    supplierId: 'supplierId',
    productBrandId: 'productBrandId',
    name: 'name',
    sku: 'sku',
    description: 'description'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductBrandOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProductBrandOrderByRelevanceFieldEnum = (typeof ProductBrandOrderByRelevanceFieldEnum)[keyof typeof ProductBrandOrderByRelevanceFieldEnum]


  export const InventoryLevelOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId'
  };

  export type InventoryLevelOrderByRelevanceFieldEnum = (typeof InventoryLevelOrderByRelevanceFieldEnum)[keyof typeof InventoryLevelOrderByRelevanceFieldEnum]


  export const PurchaseOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    userId: 'userId'
  };

  export type PurchaseOrderOrderByRelevanceFieldEnum = (typeof PurchaseOrderOrderByRelevanceFieldEnum)[keyof typeof PurchaseOrderOrderByRelevanceFieldEnum]


  export const PurchaseOrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    productId: 'productId'
  };

  export type PurchaseOrderItemOrderByRelevanceFieldEnum = (typeof PurchaseOrderItemOrderByRelevanceFieldEnum)[keyof typeof PurchaseOrderItemOrderByRelevanceFieldEnum]


  export const StockMovementOrderByRelevanceFieldEnum: {
    id: 'id',
    fromWarehouseId: 'fromWarehouseId',
    toWarehouseId: 'toWarehouseId',
    userId: 'userId',
    productId: 'productId',
    reason: 'reason'
  };

  export type StockMovementOrderByRelevanceFieldEnum = (typeof StockMovementOrderByRelevanceFieldEnum)[keyof typeof StockMovementOrderByRelevanceFieldEnum]


  export const ProductPriceHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId'
  };

  export type ProductPriceHistoryOrderByRelevanceFieldEnum = (typeof ProductPriceHistoryOrderByRelevanceFieldEnum)[keyof typeof ProductPriceHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PurchaseOrderStatus'
   */
  export type EnumPurchaseOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseOrderStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isDeleted?: BoolFilter<"User"> | boolean
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
    PurchaseOrder?: PurchaseOrderListRelationFilter
    StockMovement?: StockMovementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    ProductPriceHistory?: ProductPriceHistoryOrderByRelationAggregateInput
    PurchaseOrder?: PurchaseOrderOrderByRelationAggregateInput
    StockMovement?: StockMovementOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isDeleted?: BoolFilter<"User"> | boolean
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
    PurchaseOrder?: PurchaseOrderListRelationFilter
    StockMovement?: StockMovementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type WareHouseWhereInput = {
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    id?: StringFilter<"WareHouse"> | string
    name?: StringFilter<"WareHouse"> | string
    location?: StringFilter<"WareHouse"> | string
    createdAt?: DateTimeFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeFilter<"WareHouse"> | Date | string
    isDeleted?: BoolFilter<"WareHouse"> | boolean
    InventoryLevel?: InventoryLevelListRelationFilter
    fromStockMovement?: StockMovementListRelationFilter
    toStockMovement?: StockMovementListRelationFilter
  }

  export type WareHouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    InventoryLevel?: InventoryLevelOrderByRelationAggregateInput
    fromStockMovement?: StockMovementOrderByRelationAggregateInput
    toStockMovement?: StockMovementOrderByRelationAggregateInput
    _relevance?: WareHouseOrderByRelevanceInput
  }

  export type WareHouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    location?: StringFilter<"WareHouse"> | string
    createdAt?: DateTimeFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeFilter<"WareHouse"> | Date | string
    isDeleted?: BoolFilter<"WareHouse"> | boolean
    InventoryLevel?: InventoryLevelListRelationFilter
    fromStockMovement?: StockMovementListRelationFilter
    toStockMovement?: StockMovementListRelationFilter
  }, "id" | "name">

  export type WareHouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: WareHouseCountOrderByAggregateInput
    _max?: WareHouseMaxOrderByAggregateInput
    _min?: WareHouseMinOrderByAggregateInput
  }

  export type WareHouseScalarWhereWithAggregatesInput = {
    AND?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    OR?: WareHouseScalarWhereWithAggregatesInput[]
    NOT?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WareHouse"> | string
    name?: StringWithAggregatesFilter<"WareHouse"> | string
    location?: StringWithAggregatesFilter<"WareHouse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WareHouse"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"WareHouse"> | boolean
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    isDeleted?: BoolFilter<"Supplier"> | boolean
    Product?: ProductListRelationFilter
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
    PurchaseOrder?: PurchaseOrderOrderByRelationAggregateInput
    _relevance?: SupplierOrderByRelevanceInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    phone?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    isDeleted?: BoolFilter<"Supplier"> | boolean
    Product?: ProductListRelationFilter
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }, "id" | "name" | "email">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Supplier"> | boolean
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: StringFilter<"ProductCategory"> | string
    name?: StringFilter<"ProductCategory"> | string
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    isDeleted?: BoolFilter<"ProductCategory"> | boolean
    Product?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
    _relevance?: ProductCategoryOrderByRelevanceInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    isDeleted?: BoolFilter<"ProductCategory"> | boolean
    Product?: ProductListRelationFilter
  }, "id" | "name">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategory"> | string
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"ProductCategory"> | boolean
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    supplierId?: StringFilter<"Product"> | string
    productBrandId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    entryPrice?: FloatFilter<"Product"> | number
    unitPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    isDeleted?: BoolFilter<"Product"> | boolean
    InventoryLevel?: InventoryLevelListRelationFilter
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    productBrand?: XOR<ProductBrandScalarRelationFilter, ProductBrandWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
    StockMovement?: StockMovementListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    productBrandId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrderInput | SortOrder
    entryPrice?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    InventoryLevel?: InventoryLevelOrderByRelationAggregateInput
    ProductPriceHistory?: ProductPriceHistoryOrderByRelationAggregateInput
    category?: ProductCategoryOrderByWithRelationInput
    productBrand?: ProductBrandOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    PurchaseOrderItem?: PurchaseOrderItemOrderByRelationAggregateInput
    StockMovement?: StockMovementOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    categoryId?: StringFilter<"Product"> | string
    supplierId?: StringFilter<"Product"> | string
    productBrandId?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    entryPrice?: FloatFilter<"Product"> | number
    unitPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    isDeleted?: BoolFilter<"Product"> | boolean
    InventoryLevel?: InventoryLevelListRelationFilter
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    productBrand?: XOR<ProductBrandScalarRelationFilter, ProductBrandWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
    StockMovement?: StockMovementListRelationFilter
  }, "id" | "name" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    productBrandId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrderInput | SortOrder
    entryPrice?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    supplierId?: StringWithAggregatesFilter<"Product"> | string
    productBrandId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    entryPrice?: FloatWithAggregatesFilter<"Product"> | number
    unitPrice?: FloatWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type ProductBrandWhereInput = {
    AND?: ProductBrandWhereInput | ProductBrandWhereInput[]
    OR?: ProductBrandWhereInput[]
    NOT?: ProductBrandWhereInput | ProductBrandWhereInput[]
    id?: StringFilter<"ProductBrand"> | string
    name?: StringFilter<"ProductBrand"> | string
    createdAt?: DateTimeFilter<"ProductBrand"> | Date | string
    updatedAt?: DateTimeFilter<"ProductBrand"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type ProductBrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
    _relevance?: ProductBrandOrderByRelevanceInput
  }

  export type ProductBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductBrandWhereInput | ProductBrandWhereInput[]
    OR?: ProductBrandWhereInput[]
    NOT?: ProductBrandWhereInput | ProductBrandWhereInput[]
    name?: StringFilter<"ProductBrand"> | string
    createdAt?: DateTimeFilter<"ProductBrand"> | Date | string
    updatedAt?: DateTimeFilter<"ProductBrand"> | Date | string
    Product?: ProductListRelationFilter
  }, "id">

  export type ProductBrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductBrandCountOrderByAggregateInput
    _max?: ProductBrandMaxOrderByAggregateInput
    _min?: ProductBrandMinOrderByAggregateInput
  }

  export type ProductBrandScalarWhereWithAggregatesInput = {
    AND?: ProductBrandScalarWhereWithAggregatesInput | ProductBrandScalarWhereWithAggregatesInput[]
    OR?: ProductBrandScalarWhereWithAggregatesInput[]
    NOT?: ProductBrandScalarWhereWithAggregatesInput | ProductBrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductBrand"> | string
    name?: StringWithAggregatesFilter<"ProductBrand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductBrand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductBrand"> | Date | string
  }

  export type InventoryLevelWhereInput = {
    AND?: InventoryLevelWhereInput | InventoryLevelWhereInput[]
    OR?: InventoryLevelWhereInput[]
    NOT?: InventoryLevelWhereInput | InventoryLevelWhereInput[]
    id?: StringFilter<"InventoryLevel"> | string
    productId?: StringFilter<"InventoryLevel"> | string
    warehouseId?: StringFilter<"InventoryLevel"> | string
    quantity?: IntFilter<"InventoryLevel"> | number
    minStock?: IntFilter<"InventoryLevel"> | number
    createdAt?: DateTimeFilter<"InventoryLevel"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryLevel"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
  }

  export type InventoryLevelOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    warehouse?: WareHouseOrderByWithRelationInput
    _relevance?: InventoryLevelOrderByRelevanceInput
  }

  export type InventoryLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryLevelWhereInput | InventoryLevelWhereInput[]
    OR?: InventoryLevelWhereInput[]
    NOT?: InventoryLevelWhereInput | InventoryLevelWhereInput[]
    productId?: StringFilter<"InventoryLevel"> | string
    warehouseId?: StringFilter<"InventoryLevel"> | string
    quantity?: IntFilter<"InventoryLevel"> | number
    minStock?: IntFilter<"InventoryLevel"> | number
    createdAt?: DateTimeFilter<"InventoryLevel"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryLevel"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
  }, "id">

  export type InventoryLevelOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryLevelCountOrderByAggregateInput
    _avg?: InventoryLevelAvgOrderByAggregateInput
    _max?: InventoryLevelMaxOrderByAggregateInput
    _min?: InventoryLevelMinOrderByAggregateInput
    _sum?: InventoryLevelSumOrderByAggregateInput
  }

  export type InventoryLevelScalarWhereWithAggregatesInput = {
    AND?: InventoryLevelScalarWhereWithAggregatesInput | InventoryLevelScalarWhereWithAggregatesInput[]
    OR?: InventoryLevelScalarWhereWithAggregatesInput[]
    NOT?: InventoryLevelScalarWhereWithAggregatesInput | InventoryLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryLevel"> | string
    productId?: StringWithAggregatesFilter<"InventoryLevel"> | string
    warehouseId?: StringWithAggregatesFilter<"InventoryLevel"> | string
    quantity?: IntWithAggregatesFilter<"InventoryLevel"> | number
    minStock?: IntWithAggregatesFilter<"InventoryLevel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryLevel"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    supplierId?: StringFilter<"PurchaseOrder"> | string
    userId?: StringFilter<"PurchaseOrder"> | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    userId?: SortOrder
    orderDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    PurchaseOrderItem?: PurchaseOrderItemOrderByRelationAggregateInput
    supplier?: SupplierOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PurchaseOrderOrderByRelevanceInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    supplierId?: StringFilter<"PurchaseOrder"> | string
    userId?: StringFilter<"PurchaseOrder"> | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    userId?: SortOrder
    orderDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    supplierId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    userId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    orderDate?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    totalAmount?: FloatWithAggregatesFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
  }

  export type PurchaseOrderItemWhereInput = {
    AND?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    OR?: PurchaseOrderItemWhereInput[]
    NOT?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    id?: StringFilter<"PurchaseOrderItem"> | string
    purchaseOrderId?: StringFilter<"PurchaseOrderItem"> | string
    productId?: StringFilter<"PurchaseOrderItem"> | string
    quantity?: IntFilter<"PurchaseOrderItem"> | number
    unitPrice?: FloatFilter<"PurchaseOrderItem"> | number
    subtotal?: FloatFilter<"PurchaseOrderItem"> | number
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrderItem"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type PurchaseOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    product?: ProductOrderByWithRelationInput
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
    _relevance?: PurchaseOrderItemOrderByRelevanceInput
  }

  export type PurchaseOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    OR?: PurchaseOrderItemWhereInput[]
    NOT?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    purchaseOrderId?: StringFilter<"PurchaseOrderItem"> | string
    productId?: StringFilter<"PurchaseOrderItem"> | string
    quantity?: IntFilter<"PurchaseOrderItem"> | number
    unitPrice?: FloatFilter<"PurchaseOrderItem"> | number
    subtotal?: FloatFilter<"PurchaseOrderItem"> | number
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrderItem"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id">

  export type PurchaseOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: PurchaseOrderItemCountOrderByAggregateInput
    _avg?: PurchaseOrderItemAvgOrderByAggregateInput
    _max?: PurchaseOrderItemMaxOrderByAggregateInput
    _min?: PurchaseOrderItemMinOrderByAggregateInput
    _sum?: PurchaseOrderItemSumOrderByAggregateInput
  }

  export type PurchaseOrderItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderItemScalarWhereWithAggregatesInput | PurchaseOrderItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderItemScalarWhereWithAggregatesInput | PurchaseOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseOrderItem"> | string
    purchaseOrderId?: StringWithAggregatesFilter<"PurchaseOrderItem"> | string
    productId?: StringWithAggregatesFilter<"PurchaseOrderItem"> | string
    quantity?: IntWithAggregatesFilter<"PurchaseOrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"PurchaseOrderItem"> | number
    subtotal?: FloatWithAggregatesFilter<"PurchaseOrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"PurchaseOrderItem"> | boolean
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    fromWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    toWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    fromWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    toWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    fromWarehouseId?: SortOrderInput | SortOrder
    toWarehouseId?: SortOrderInput | SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromWarehouse?: WareHouseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    toWarehouse?: WareHouseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: StockMovementOrderByRelevanceInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    fromWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    toWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    fromWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    toWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    fromWarehouseId?: SortOrderInput | SortOrder
    toWarehouseId?: SortOrderInput | SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    fromWarehouseId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    toWarehouseId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    userId?: StringWithAggregatesFilter<"StockMovement"> | string
    productId?: StringWithAggregatesFilter<"StockMovement"> | string
    quantity?: IntWithAggregatesFilter<"StockMovement"> | number
    reason?: StringWithAggregatesFilter<"StockMovement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type ProductPriceHistoryWhereInput = {
    AND?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    OR?: ProductPriceHistoryWhereInput[]
    NOT?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    id?: StringFilter<"ProductPriceHistory"> | string
    productId?: StringFilter<"ProductPriceHistory"> | string
    userId?: StringFilter<"ProductPriceHistory"> | string
    previousPrice?: FloatFilter<"ProductPriceHistory"> | number
    newPrice?: FloatFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProductPriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    previousPrice?: SortOrder
    newPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ProductPriceHistoryOrderByRelevanceInput
  }

  export type ProductPriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    OR?: ProductPriceHistoryWhereInput[]
    NOT?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    productId?: StringFilter<"ProductPriceHistory"> | string
    userId?: StringFilter<"ProductPriceHistory"> | string
    previousPrice?: FloatFilter<"ProductPriceHistory"> | number
    newPrice?: FloatFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProductPriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    previousPrice?: SortOrder
    newPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductPriceHistoryCountOrderByAggregateInput
    _avg?: ProductPriceHistoryAvgOrderByAggregateInput
    _max?: ProductPriceHistoryMaxOrderByAggregateInput
    _min?: ProductPriceHistoryMinOrderByAggregateInput
    _sum?: ProductPriceHistorySumOrderByAggregateInput
  }

  export type ProductPriceHistoryScalarWhereWithAggregatesInput = {
    AND?: ProductPriceHistoryScalarWhereWithAggregatesInput | ProductPriceHistoryScalarWhereWithAggregatesInput[]
    OR?: ProductPriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceHistoryScalarWhereWithAggregatesInput | ProductPriceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPriceHistory"> | string
    productId?: StringWithAggregatesFilter<"ProductPriceHistory"> | string
    userId?: StringWithAggregatesFilter<"ProductPriceHistory"> | string
    previousPrice?: FloatWithAggregatesFilter<"ProductPriceHistory"> | number
    newPrice?: FloatWithAggregatesFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductPriceHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductPriceHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutUserInput
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutUserInput
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutUserNestedInput
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutUserNestedInput
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WareHouseCreateInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutWarehouseInput
    fromStockMovement?: StockMovementCreateNestedManyWithoutFromWarehouseInput
    toStockMovement?: StockMovementCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutWarehouseInput
    fromStockMovement?: StockMovementUncheckedCreateNestedManyWithoutFromWarehouseInput
    toStockMovement?: StockMovementUncheckedCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutWarehouseNestedInput
    fromStockMovement?: StockMovementUpdateManyWithoutFromWarehouseNestedInput
    toStockMovement?: StockMovementUpdateManyWithoutToWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutWarehouseNestedInput
    fromStockMovement?: StockMovementUncheckedUpdateManyWithoutFromWarehouseNestedInput
    toStockMovement?: StockMovementUncheckedUpdateManyWithoutToWarehouseNestedInput
  }

  export type WareHouseCreateManyInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type WareHouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WareHouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductCreateNestedManyWithoutSupplierInput
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUpdateManyWithoutSupplierNestedInput
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBrandCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutProductBrandInput
  }

  export type ProductBrandUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutProductBrandInput
  }

  export type ProductBrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutProductBrandNestedInput
  }

  export type ProductBrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutProductBrandNestedInput
  }

  export type ProductBrandCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductBrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelCreateInput = {
    id?: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryLevelInput
    warehouse: WareHouseCreateNestedOneWithoutInventoryLevelInput
  }

  export type InventoryLevelUncheckedCreateInput = {
    id?: string
    productId: string
    warehouseId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryLevelNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutInventoryLevelNestedInput
  }

  export type InventoryLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelCreateManyInput = {
    id?: string
    productId: string
    warehouseId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    id?: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
    user: UserCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: string
    supplierId: string
    userId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
    user?: UserUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: string
    supplierId: string
    userId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    product: ProductCreateNestedOneWithoutPurchaseOrderItemInput
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutPurchaseOrderItemInput
  }

  export type PurchaseOrderItemUncheckedCreateInput = {
    id?: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutPurchaseOrderItemNestedInput
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderItemNestedInput
  }

  export type PurchaseOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemCreateManyInput = {
    id?: string
    purchaseOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StockMovementCreateInput = {
    id?: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromWarehouse?: WareHouseCreateNestedOneWithoutFromStockMovementInput
    product: ProductCreateNestedOneWithoutStockMovementInput
    toWarehouse?: WareHouseCreateNestedOneWithoutToStockMovementInput
    user: UserCreateNestedOneWithoutStockMovementInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromWarehouse?: WareHouseUpdateOneWithoutFromStockMovementNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementNestedInput
    toWarehouse?: WareHouseUpdateOneWithoutToStockMovementNestedInput
    user?: UserUpdateOneRequiredWithoutStockMovementNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryCreateInput = {
    id?: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductPriceHistoryInput
    user: UserCreateNestedOneWithoutProductPriceHistoryInput
  }

  export type ProductPriceHistoryUncheckedCreateInput = {
    id?: string
    productId: string
    userId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductPriceHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutProductPriceHistoryNestedInput
  }

  export type ProductPriceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryCreateManyInput = {
    id?: string
    productId: string
    userId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductPriceHistoryListRelationFilter = {
    every?: ProductPriceHistoryWhereInput
    some?: ProductPriceHistoryWhereInput
    none?: ProductPriceHistoryWhereInput
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type ProductPriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InventoryLevelListRelationFilter = {
    every?: InventoryLevelWhereInput
    some?: InventoryLevelWhereInput
    none?: InventoryLevelWhereInput
  }

  export type InventoryLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WareHouseOrderByRelevanceInput = {
    fields: WareHouseOrderByRelevanceFieldEnum | WareHouseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WareHouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type WareHouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type WareHouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierOrderByRelevanceInput = {
    fields: SupplierOrderByRelevanceFieldEnum | SupplierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCategoryOrderByRelevanceInput = {
    fields: ProductCategoryOrderByRelevanceFieldEnum | ProductCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type ProductBrandScalarRelationFilter = {
    is?: ProductBrandWhereInput
    isNot?: ProductBrandWhereInput
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type PurchaseOrderItemListRelationFilter = {
    every?: PurchaseOrderItemWhereInput
    some?: PurchaseOrderItemWhereInput
    none?: PurchaseOrderItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    productBrandId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    entryPrice?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    entryPrice?: SortOrder
    unitPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    productBrandId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    entryPrice?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    productBrandId?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    entryPrice?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    entryPrice?: SortOrder
    unitPrice?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductBrandOrderByRelevanceInput = {
    fields: ProductBrandOrderByRelevanceFieldEnum | ProductBrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductBrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductBrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type WareHouseScalarRelationFilter = {
    is?: WareHouseWhereInput
    isNot?: WareHouseWhereInput
  }

  export type InventoryLevelOrderByRelevanceInput = {
    fields: InventoryLevelOrderByRelevanceFieldEnum | InventoryLevelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryLevelCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryLevelAvgOrderByAggregateInput = {
    quantity?: SortOrder
    minStock?: SortOrder
  }

  export type InventoryLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryLevelMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryLevelSumOrderByAggregateInput = {
    quantity?: SortOrder
    minStock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPurchaseOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[]
    notIn?: $Enums.PurchaseOrderStatus[]
    not?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseOrderOrderByRelevanceInput = {
    fields: PurchaseOrderOrderByRelevanceFieldEnum | PurchaseOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    userId?: SortOrder
    orderDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    userId?: SortOrder
    orderDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    userId?: SortOrder
    orderDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[]
    notIn?: $Enums.PurchaseOrderStatus[]
    not?: NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderItemOrderByRelevanceInput = {
    fields: PurchaseOrderItemOrderByRelevanceFieldEnum | PurchaseOrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PurchaseOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type PurchaseOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type WareHouseNullableScalarRelationFilter = {
    is?: WareHouseWhereInput | null
    isNot?: WareHouseWhereInput | null
  }

  export type StockMovementOrderByRelevanceInput = {
    fields: StockMovementOrderByRelevanceFieldEnum | StockMovementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    fromWarehouseId?: SortOrder
    toWarehouseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    fromWarehouseId?: SortOrder
    toWarehouseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    fromWarehouseId?: SortOrder
    toWarehouseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductPriceHistoryOrderByRelevanceInput = {
    fields: ProductPriceHistoryOrderByRelevanceFieldEnum | ProductPriceHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductPriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    previousPrice?: SortOrder
    newPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPriceHistoryAvgOrderByAggregateInput = {
    previousPrice?: SortOrder
    newPrice?: SortOrder
  }

  export type ProductPriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    previousPrice?: SortOrder
    newPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    previousPrice?: SortOrder
    newPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPriceHistorySumOrderByAggregateInput = {
    previousPrice?: SortOrder
    newPrice?: SortOrder
  }

  export type ProductPriceHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput> | ProductPriceHistoryCreateWithoutUserInput[] | ProductPriceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutUserInput | ProductPriceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProductPriceHistoryCreateManyUserInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutUserInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type ProductPriceHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput> | ProductPriceHistoryCreateWithoutUserInput[] | ProductPriceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutUserInput | ProductPriceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProductPriceHistoryCreateManyUserInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductPriceHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput> | ProductPriceHistoryCreateWithoutUserInput[] | ProductPriceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutUserInput | ProductPriceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutUserInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductPriceHistoryCreateManyUserInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutUserInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutUserInput | ProductPriceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type PurchaseOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutUserInput | PurchaseOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutUserInput | PurchaseOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutUserInput | PurchaseOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutUserInput | StockMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutUserInput | StockMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutUserInput | StockMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput> | ProductPriceHistoryCreateWithoutUserInput[] | ProductPriceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutUserInput | ProductPriceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutUserInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductPriceHistoryCreateManyUserInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutUserInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutUserInput | ProductPriceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutUserInput | PurchaseOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutUserInput | PurchaseOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutUserInput | PurchaseOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutUserInput | StockMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutUserInput | StockMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutUserInput | StockMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type InventoryLevelCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput> | InventoryLevelCreateWithoutWarehouseInput[] | InventoryLevelUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutWarehouseInput | InventoryLevelCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryLevelCreateManyWarehouseInputEnvelope
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutFromWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput> | StockMovementCreateWithoutFromWarehouseInput[] | StockMovementUncheckedCreateWithoutFromWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutFromWarehouseInput | StockMovementCreateOrConnectWithoutFromWarehouseInput[]
    createMany?: StockMovementCreateManyFromWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutToWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput> | StockMovementCreateWithoutToWarehouseInput[] | StockMovementUncheckedCreateWithoutToWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutToWarehouseInput | StockMovementCreateOrConnectWithoutToWarehouseInput[]
    createMany?: StockMovementCreateManyToWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type InventoryLevelUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput> | InventoryLevelCreateWithoutWarehouseInput[] | InventoryLevelUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutWarehouseInput | InventoryLevelCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryLevelCreateManyWarehouseInputEnvelope
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutFromWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput> | StockMovementCreateWithoutFromWarehouseInput[] | StockMovementUncheckedCreateWithoutFromWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutFromWarehouseInput | StockMovementCreateOrConnectWithoutFromWarehouseInput[]
    createMany?: StockMovementCreateManyFromWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutToWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput> | StockMovementCreateWithoutToWarehouseInput[] | StockMovementUncheckedCreateWithoutToWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutToWarehouseInput | StockMovementCreateOrConnectWithoutToWarehouseInput[]
    createMany?: StockMovementCreateManyToWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type InventoryLevelUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput> | InventoryLevelCreateWithoutWarehouseInput[] | InventoryLevelUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutWarehouseInput | InventoryLevelCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryLevelUpsertWithWhereUniqueWithoutWarehouseInput | InventoryLevelUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryLevelCreateManyWarehouseInputEnvelope
    set?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    disconnect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    delete?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    update?: InventoryLevelUpdateWithWhereUniqueWithoutWarehouseInput | InventoryLevelUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryLevelUpdateManyWithWhereWithoutWarehouseInput | InventoryLevelUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutFromWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput> | StockMovementCreateWithoutFromWarehouseInput[] | StockMovementUncheckedCreateWithoutFromWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutFromWarehouseInput | StockMovementCreateOrConnectWithoutFromWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutFromWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutFromWarehouseInput[]
    createMany?: StockMovementCreateManyFromWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutFromWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutFromWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutFromWarehouseInput | StockMovementUpdateManyWithWhereWithoutFromWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutToWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput> | StockMovementCreateWithoutToWarehouseInput[] | StockMovementUncheckedCreateWithoutToWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutToWarehouseInput | StockMovementCreateOrConnectWithoutToWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutToWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutToWarehouseInput[]
    createMany?: StockMovementCreateManyToWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutToWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutToWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutToWarehouseInput | StockMovementUpdateManyWithWhereWithoutToWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type InventoryLevelUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput> | InventoryLevelCreateWithoutWarehouseInput[] | InventoryLevelUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutWarehouseInput | InventoryLevelCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryLevelUpsertWithWhereUniqueWithoutWarehouseInput | InventoryLevelUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryLevelCreateManyWarehouseInputEnvelope
    set?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    disconnect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    delete?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    update?: InventoryLevelUpdateWithWhereUniqueWithoutWarehouseInput | InventoryLevelUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryLevelUpdateManyWithWhereWithoutWarehouseInput | InventoryLevelUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutFromWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput> | StockMovementCreateWithoutFromWarehouseInput[] | StockMovementUncheckedCreateWithoutFromWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutFromWarehouseInput | StockMovementCreateOrConnectWithoutFromWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutFromWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutFromWarehouseInput[]
    createMany?: StockMovementCreateManyFromWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutFromWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutFromWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutFromWarehouseInput | StockMovementUpdateManyWithWhereWithoutFromWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutToWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput> | StockMovementCreateWithoutToWarehouseInput[] | StockMovementUncheckedCreateWithoutToWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutToWarehouseInput | StockMovementCreateOrConnectWithoutToWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutToWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutToWarehouseInput[]
    createMany?: StockMovementCreateManyToWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutToWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutToWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutToWarehouseInput | StockMovementUpdateManyWithWhereWithoutToWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PurchaseOrderUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InventoryLevelCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput> | InventoryLevelCreateWithoutProductInput[] | InventoryLevelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutProductInput | InventoryLevelCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLevelCreateManyProductInputEnvelope
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
  }

  export type ProductPriceHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type ProductBrandCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductBrandCreateWithoutProductInput, ProductBrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductBrandCreateOrConnectWithoutProductInput
    connect?: ProductBrandWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutProductInput = {
    create?: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductInput
    connect?: SupplierWhereUniqueInput
  }

  export type PurchaseOrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput> | PurchaseOrderItemCreateWithoutProductInput[] | PurchaseOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutProductInput | PurchaseOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseOrderItemCreateManyProductInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type InventoryLevelUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput> | InventoryLevelCreateWithoutProductInput[] | InventoryLevelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutProductInput | InventoryLevelCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLevelCreateManyProductInputEnvelope
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
  }

  export type ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput> | PurchaseOrderItemCreateWithoutProductInput[] | PurchaseOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutProductInput | PurchaseOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseOrderItemCreateManyProductInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryLevelUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput> | InventoryLevelCreateWithoutProductInput[] | InventoryLevelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutProductInput | InventoryLevelCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLevelUpsertWithWhereUniqueWithoutProductInput | InventoryLevelUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLevelCreateManyProductInputEnvelope
    set?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    disconnect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    delete?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    update?: InventoryLevelUpdateWithWhereUniqueWithoutProductInput | InventoryLevelUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLevelUpdateManyWithWhereWithoutProductInput | InventoryLevelUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
  }

  export type ProductPriceHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    upsert?: ProductCategoryUpsertWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductInput, ProductCategoryUpdateWithoutProductInput>, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductBrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductBrandCreateWithoutProductInput, ProductBrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductBrandCreateOrConnectWithoutProductInput
    upsert?: ProductBrandUpsertWithoutProductInput
    connect?: ProductBrandWhereUniqueInput
    update?: XOR<XOR<ProductBrandUpdateToOneWithWhereWithoutProductInput, ProductBrandUpdateWithoutProductInput>, ProductBrandUncheckedUpdateWithoutProductInput>
  }

  export type SupplierUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductInput
    upsert?: SupplierUpsertWithoutProductInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProductInput, SupplierUpdateWithoutProductInput>, SupplierUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseOrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput> | PurchaseOrderItemCreateWithoutProductInput[] | PurchaseOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutProductInput | PurchaseOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseOrderItemCreateManyProductInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutProductInput | PurchaseOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type InventoryLevelUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput> | InventoryLevelCreateWithoutProductInput[] | InventoryLevelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLevelCreateOrConnectWithoutProductInput | InventoryLevelCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLevelUpsertWithWhereUniqueWithoutProductInput | InventoryLevelUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLevelCreateManyProductInputEnvelope
    set?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    disconnect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    delete?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    connect?: InventoryLevelWhereUniqueInput | InventoryLevelWhereUniqueInput[]
    update?: InventoryLevelUpdateWithWhereUniqueWithoutProductInput | InventoryLevelUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLevelUpdateManyWithWhereWithoutProductInput | InventoryLevelUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput> | PurchaseOrderItemCreateWithoutProductInput[] | PurchaseOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutProductInput | PurchaseOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseOrderItemCreateManyProductInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutProductInput | PurchaseOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutProductBrandInput = {
    create?: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput> | ProductCreateWithoutProductBrandInput[] | ProductUncheckedCreateWithoutProductBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductBrandInput | ProductCreateOrConnectWithoutProductBrandInput[]
    createMany?: ProductCreateManyProductBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProductBrandInput = {
    create?: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput> | ProductCreateWithoutProductBrandInput[] | ProductUncheckedCreateWithoutProductBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductBrandInput | ProductCreateOrConnectWithoutProductBrandInput[]
    createMany?: ProductCreateManyProductBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutProductBrandNestedInput = {
    create?: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput> | ProductCreateWithoutProductBrandInput[] | ProductUncheckedCreateWithoutProductBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductBrandInput | ProductCreateOrConnectWithoutProductBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductBrandInput | ProductUpsertWithWhereUniqueWithoutProductBrandInput[]
    createMany?: ProductCreateManyProductBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductBrandInput | ProductUpdateWithWhereUniqueWithoutProductBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductBrandInput | ProductUpdateManyWithWhereWithoutProductBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProductBrandNestedInput = {
    create?: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput> | ProductCreateWithoutProductBrandInput[] | ProductUncheckedCreateWithoutProductBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductBrandInput | ProductCreateOrConnectWithoutProductBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductBrandInput | ProductUpsertWithWhereUniqueWithoutProductBrandInput[]
    createMany?: ProductCreateManyProductBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductBrandInput | ProductUpdateWithWhereUniqueWithoutProductBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductBrandInput | ProductUpdateManyWithWhereWithoutProductBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInventoryLevelInput = {
    create?: XOR<ProductCreateWithoutInventoryLevelInput, ProductUncheckedCreateWithoutInventoryLevelInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryLevelInput
    connect?: ProductWhereUniqueInput
  }

  export type WareHouseCreateNestedOneWithoutInventoryLevelInput = {
    create?: XOR<WareHouseCreateWithoutInventoryLevelInput, WareHouseUncheckedCreateWithoutInventoryLevelInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutInventoryLevelInput
    connect?: WareHouseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutInventoryLevelNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryLevelInput, ProductUncheckedCreateWithoutInventoryLevelInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryLevelInput
    upsert?: ProductUpsertWithoutInventoryLevelInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryLevelInput, ProductUpdateWithoutInventoryLevelInput>, ProductUncheckedUpdateWithoutInventoryLevelInput>
  }

  export type WareHouseUpdateOneRequiredWithoutInventoryLevelNestedInput = {
    create?: XOR<WareHouseCreateWithoutInventoryLevelInput, WareHouseUncheckedCreateWithoutInventoryLevelInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutInventoryLevelInput
    upsert?: WareHouseUpsertWithoutInventoryLevelInput
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutInventoryLevelInput, WareHouseUpdateWithoutInventoryLevelInput>, WareHouseUncheckedUpdateWithoutInventoryLevelInput>
  }

  export type PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type SupplierCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrderInput
    connect?: SupplierWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrderInput
    connect?: UserWhereUniqueInput
  }

  export type PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type EnumPurchaseOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseOrderStatus
  }

  export type PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrderInput
    upsert?: SupplierUpsertWithoutPurchaseOrderInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPurchaseOrderInput, SupplierUpdateWithoutPurchaseOrderInput>, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type UserUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrderInput
    upsert?: UserUpsertWithoutPurchaseOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseOrderInput, UserUpdateWithoutPurchaseOrderInput>, UserUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPurchaseOrderItemInput = {
    create?: XOR<ProductCreateWithoutPurchaseOrderItemInput, ProductUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type PurchaseOrderCreateNestedOneWithoutPurchaseOrderItemInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPurchaseOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseOrderItemInput, ProductUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseOrderItemInput
    upsert?: ProductUpsertWithoutPurchaseOrderItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchaseOrderItemInput, ProductUpdateWithoutPurchaseOrderItemInput>, ProductUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderItemNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput
    upsert?: PurchaseOrderUpsertWithoutPurchaseOrderItemInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderItemInput, PurchaseOrderUpdateWithoutPurchaseOrderItemInput>, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type WareHouseCreateNestedOneWithoutFromStockMovementInput = {
    create?: XOR<WareHouseCreateWithoutFromStockMovementInput, WareHouseUncheckedCreateWithoutFromStockMovementInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutFromStockMovementInput
    connect?: WareHouseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutStockMovementInput = {
    create?: XOR<ProductCreateWithoutStockMovementInput, ProductUncheckedCreateWithoutStockMovementInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementInput
    connect?: ProductWhereUniqueInput
  }

  export type WareHouseCreateNestedOneWithoutToStockMovementInput = {
    create?: XOR<WareHouseCreateWithoutToStockMovementInput, WareHouseUncheckedCreateWithoutToStockMovementInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutToStockMovementInput
    connect?: WareHouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStockMovementInput = {
    create?: XOR<UserCreateWithoutStockMovementInput, UserUncheckedCreateWithoutStockMovementInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementInput
    connect?: UserWhereUniqueInput
  }

  export type WareHouseUpdateOneWithoutFromStockMovementNestedInput = {
    create?: XOR<WareHouseCreateWithoutFromStockMovementInput, WareHouseUncheckedCreateWithoutFromStockMovementInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutFromStockMovementInput
    upsert?: WareHouseUpsertWithoutFromStockMovementInput
    disconnect?: WareHouseWhereInput | boolean
    delete?: WareHouseWhereInput | boolean
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutFromStockMovementInput, WareHouseUpdateWithoutFromStockMovementInput>, WareHouseUncheckedUpdateWithoutFromStockMovementInput>
  }

  export type ProductUpdateOneRequiredWithoutStockMovementNestedInput = {
    create?: XOR<ProductCreateWithoutStockMovementInput, ProductUncheckedCreateWithoutStockMovementInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementInput
    upsert?: ProductUpsertWithoutStockMovementInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockMovementInput, ProductUpdateWithoutStockMovementInput>, ProductUncheckedUpdateWithoutStockMovementInput>
  }

  export type WareHouseUpdateOneWithoutToStockMovementNestedInput = {
    create?: XOR<WareHouseCreateWithoutToStockMovementInput, WareHouseUncheckedCreateWithoutToStockMovementInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutToStockMovementInput
    upsert?: WareHouseUpsertWithoutToStockMovementInput
    disconnect?: WareHouseWhereInput | boolean
    delete?: WareHouseWhereInput | boolean
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutToStockMovementInput, WareHouseUpdateWithoutToStockMovementInput>, WareHouseUncheckedUpdateWithoutToStockMovementInput>
  }

  export type UserUpdateOneRequiredWithoutStockMovementNestedInput = {
    create?: XOR<UserCreateWithoutStockMovementInput, UserUncheckedCreateWithoutStockMovementInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementInput
    upsert?: UserUpsertWithoutStockMovementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockMovementInput, UserUpdateWithoutStockMovementInput>, UserUncheckedUpdateWithoutStockMovementInput>
  }

  export type ProductCreateNestedOneWithoutProductPriceHistoryInput = {
    create?: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPriceHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductPriceHistoryInput = {
    create?: XOR<UserCreateWithoutProductPriceHistoryInput, UserUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductPriceHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductPriceHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPriceHistoryInput
    upsert?: ProductUpsertWithoutProductPriceHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductPriceHistoryInput, ProductUpdateWithoutProductPriceHistoryInput>, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutProductPriceHistoryNestedInput = {
    create?: XOR<UserCreateWithoutProductPriceHistoryInput, UserUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductPriceHistoryInput
    upsert?: UserUpsertWithoutProductPriceHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductPriceHistoryInput, UserUpdateWithoutProductPriceHistoryInput>, UserUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[]
    notIn?: $Enums.PurchaseOrderStatus[]
    not?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
  }

  export type NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseOrderStatus | EnumPurchaseOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseOrderStatus[]
    notIn?: $Enums.PurchaseOrderStatus[]
    not?: NestedEnumPurchaseOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseOrderStatusFilter<$PrismaModel>
  }

  export type ProductPriceHistoryCreateWithoutUserInput = {
    id?: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductPriceHistoryInput
  }

  export type ProductPriceHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryCreateOrConnectWithoutUserInput = {
    where: ProductPriceHistoryWhereUniqueInput
    create: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProductPriceHistoryCreateManyUserInputEnvelope = {
    data: ProductPriceHistoryCreateManyUserInput | ProductPriceHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutUserInput = {
    id?: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutUserInput = {
    id?: string
    supplierId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput>
  }

  export type PurchaseOrderCreateManyUserInputEnvelope = {
    data: PurchaseOrderCreateManyUserInput | PurchaseOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutUserInput = {
    id?: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromWarehouse?: WareHouseCreateNestedOneWithoutFromStockMovementInput
    product: ProductCreateNestedOneWithoutStockMovementInput
    toWarehouse?: WareHouseCreateNestedOneWithoutToStockMovementInput
  }

  export type StockMovementUncheckedCreateWithoutUserInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput>
  }

  export type StockMovementCreateManyUserInputEnvelope = {
    data: StockMovementCreateManyUserInput | StockMovementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductPriceHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductPriceHistoryWhereUniqueInput
    update: XOR<ProductPriceHistoryUpdateWithoutUserInput, ProductPriceHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ProductPriceHistoryCreateWithoutUserInput, ProductPriceHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProductPriceHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductPriceHistoryWhereUniqueInput
    data: XOR<ProductPriceHistoryUpdateWithoutUserInput, ProductPriceHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ProductPriceHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ProductPriceHistoryScalarWhereInput
    data: XOR<ProductPriceHistoryUpdateManyMutationInput, ProductPriceHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductPriceHistoryScalarWhereInput = {
    AND?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
    OR?: ProductPriceHistoryScalarWhereInput[]
    NOT?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
    id?: StringFilter<"ProductPriceHistory"> | string
    productId?: StringFilter<"ProductPriceHistory"> | string
    userId?: StringFilter<"ProductPriceHistory"> | string
    previousPrice?: FloatFilter<"ProductPriceHistory"> | number
    newPrice?: FloatFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutUserInput, PurchaseOrderUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutUserInput, PurchaseOrderUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    supplierId?: StringFilter<"PurchaseOrder"> | string
    userId?: StringFilter<"PurchaseOrder"> | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    status?: EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
  }

  export type StockMovementUpsertWithWhereUniqueWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutUserInput, StockMovementUncheckedUpdateWithoutUserInput>
    create: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutUserInput, StockMovementUncheckedUpdateWithoutUserInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutUserInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutUserInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    fromWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    toWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    reason?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type InventoryLevelCreateWithoutWarehouseInput = {
    id?: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryLevelInput
  }

  export type InventoryLevelUncheckedCreateWithoutWarehouseInput = {
    id?: string
    productId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelCreateOrConnectWithoutWarehouseInput = {
    where: InventoryLevelWhereUniqueInput
    create: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryLevelCreateManyWarehouseInputEnvelope = {
    data: InventoryLevelCreateManyWarehouseInput | InventoryLevelCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutFromWarehouseInput = {
    id?: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementInput
    toWarehouse?: WareHouseCreateNestedOneWithoutToStockMovementInput
    user: UserCreateNestedOneWithoutStockMovementInput
  }

  export type StockMovementUncheckedCreateWithoutFromWarehouseInput = {
    id?: string
    toWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutFromWarehouseInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput>
  }

  export type StockMovementCreateManyFromWarehouseInputEnvelope = {
    data: StockMovementCreateManyFromWarehouseInput | StockMovementCreateManyFromWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutToWarehouseInput = {
    id?: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromWarehouse?: WareHouseCreateNestedOneWithoutFromStockMovementInput
    product: ProductCreateNestedOneWithoutStockMovementInput
    user: UserCreateNestedOneWithoutStockMovementInput
  }

  export type StockMovementUncheckedCreateWithoutToWarehouseInput = {
    id?: string
    fromWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutToWarehouseInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput>
  }

  export type StockMovementCreateManyToWarehouseInputEnvelope = {
    data: StockMovementCreateManyToWarehouseInput | StockMovementCreateManyToWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type InventoryLevelUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryLevelWhereUniqueInput
    update: XOR<InventoryLevelUpdateWithoutWarehouseInput, InventoryLevelUncheckedUpdateWithoutWarehouseInput>
    create: XOR<InventoryLevelCreateWithoutWarehouseInput, InventoryLevelUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryLevelUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryLevelWhereUniqueInput
    data: XOR<InventoryLevelUpdateWithoutWarehouseInput, InventoryLevelUncheckedUpdateWithoutWarehouseInput>
  }

  export type InventoryLevelUpdateManyWithWhereWithoutWarehouseInput = {
    where: InventoryLevelScalarWhereInput
    data: XOR<InventoryLevelUpdateManyMutationInput, InventoryLevelUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type InventoryLevelScalarWhereInput = {
    AND?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
    OR?: InventoryLevelScalarWhereInput[]
    NOT?: InventoryLevelScalarWhereInput | InventoryLevelScalarWhereInput[]
    id?: StringFilter<"InventoryLevel"> | string
    productId?: StringFilter<"InventoryLevel"> | string
    warehouseId?: StringFilter<"InventoryLevel"> | string
    quantity?: IntFilter<"InventoryLevel"> | number
    minStock?: IntFilter<"InventoryLevel"> | number
    createdAt?: DateTimeFilter<"InventoryLevel"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryLevel"> | Date | string
  }

  export type StockMovementUpsertWithWhereUniqueWithoutFromWarehouseInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutFromWarehouseInput, StockMovementUncheckedUpdateWithoutFromWarehouseInput>
    create: XOR<StockMovementCreateWithoutFromWarehouseInput, StockMovementUncheckedCreateWithoutFromWarehouseInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutFromWarehouseInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutFromWarehouseInput, StockMovementUncheckedUpdateWithoutFromWarehouseInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutFromWarehouseInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutFromWarehouseInput>
  }

  export type StockMovementUpsertWithWhereUniqueWithoutToWarehouseInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutToWarehouseInput, StockMovementUncheckedUpdateWithoutToWarehouseInput>
    create: XOR<StockMovementCreateWithoutToWarehouseInput, StockMovementUncheckedCreateWithoutToWarehouseInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutToWarehouseInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutToWarehouseInput, StockMovementUncheckedUpdateWithoutToWarehouseInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutToWarehouseInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutToWarehouseInput>
  }

  export type ProductCreateWithoutSupplierInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: string
    categoryId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductCreateManySupplierInputEnvelope = {
    data: ProductCreateManySupplierInput | ProductCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutSupplierInput = {
    id?: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput
    user: UserCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutSupplierInput = {
    id?: string
    userId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderCreateManySupplierInputEnvelope = {
    data: PurchaseOrderCreateManySupplierInput | PurchaseOrderCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    supplierId?: StringFilter<"Product"> | string
    productBrandId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    entryPrice?: FloatFilter<"Product"> | number
    unitPrice?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    isDeleted?: BoolFilter<"Product"> | boolean
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type InventoryLevelCreateWithoutProductInput = {
    id?: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WareHouseCreateNestedOneWithoutInventoryLevelInput
  }

  export type InventoryLevelUncheckedCreateWithoutProductInput = {
    id?: string
    warehouseId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelCreateOrConnectWithoutProductInput = {
    where: InventoryLevelWhereUniqueInput
    create: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput>
  }

  export type InventoryLevelCreateManyProductInputEnvelope = {
    data: InventoryLevelCreateManyProductInput | InventoryLevelCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductPriceHistoryCreateWithoutProductInput = {
    id?: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductPriceHistoryInput
  }

  export type ProductPriceHistoryUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryCreateOrConnectWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    create: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceHistoryCreateManyProductInputEnvelope = {
    data: ProductPriceHistoryCreateManyProductInput | ProductPriceHistoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductCategoryUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductBrandCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductBrandUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductBrandCreateOrConnectWithoutProductInput = {
    where: ProductBrandWhereUniqueInput
    create: XOR<ProductBrandCreateWithoutProductInput, ProductBrandUncheckedCreateWithoutProductInput>
  }

  export type SupplierCreateWithoutProductInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutProductInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
  }

  export type PurchaseOrderItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutPurchaseOrderItemInput
  }

  export type PurchaseOrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    purchaseOrderId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderItemCreateOrConnectWithoutProductInput = {
    where: PurchaseOrderItemWhereUniqueInput
    create: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseOrderItemCreateManyProductInputEnvelope = {
    data: PurchaseOrderItemCreateManyProductInput | PurchaseOrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutProductInput = {
    id?: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromWarehouse?: WareHouseCreateNestedOneWithoutFromStockMovementInput
    toWarehouse?: WareHouseCreateNestedOneWithoutToStockMovementInput
    user: UserCreateNestedOneWithoutStockMovementInput
  }

  export type StockMovementUncheckedCreateWithoutProductInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    userId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementCreateManyProductInputEnvelope = {
    data: StockMovementCreateManyProductInput | StockMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryLevelUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryLevelWhereUniqueInput
    update: XOR<InventoryLevelUpdateWithoutProductInput, InventoryLevelUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryLevelCreateWithoutProductInput, InventoryLevelUncheckedCreateWithoutProductInput>
  }

  export type InventoryLevelUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryLevelWhereUniqueInput
    data: XOR<InventoryLevelUpdateWithoutProductInput, InventoryLevelUncheckedUpdateWithoutProductInput>
  }

  export type InventoryLevelUpdateManyWithWhereWithoutProductInput = {
    where: InventoryLevelScalarWhereInput
    data: XOR<InventoryLevelUpdateManyMutationInput, InventoryLevelUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    update: XOR<ProductPriceHistoryUpdateWithoutProductInput, ProductPriceHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    data: XOR<ProductPriceHistoryUpdateWithoutProductInput, ProductPriceHistoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductPriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductPriceHistoryScalarWhereInput
    data: XOR<ProductPriceHistoryUpdateManyMutationInput, ProductPriceHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCategoryUpsertWithoutProductInput = {
    update: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBrandUpsertWithoutProductInput = {
    update: XOR<ProductBrandUpdateWithoutProductInput, ProductBrandUncheckedUpdateWithoutProductInput>
    create: XOR<ProductBrandCreateWithoutProductInput, ProductBrandUncheckedCreateWithoutProductInput>
    where?: ProductBrandWhereInput
  }

  export type ProductBrandUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductBrandWhereInput
    data: XOR<ProductBrandUpdateWithoutProductInput, ProductBrandUncheckedUpdateWithoutProductInput>
  }

  export type ProductBrandUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBrandUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpsertWithoutProductInput = {
    update: XOR<SupplierUpdateWithoutProductInput, SupplierUncheckedUpdateWithoutProductInput>
    create: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProductInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProductInput, SupplierUncheckedUpdateWithoutProductInput>
  }

  export type SupplierUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchaseOrderItemWhereUniqueInput
    update: XOR<PurchaseOrderItemUpdateWithoutProductInput, PurchaseOrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseOrderItemCreateWithoutProductInput, PurchaseOrderItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchaseOrderItemWhereUniqueInput
    data: XOR<PurchaseOrderItemUpdateWithoutProductInput, PurchaseOrderItemUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseOrderItemUpdateManyWithWhereWithoutProductInput = {
    where: PurchaseOrderItemScalarWhereInput
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchaseOrderItemScalarWhereInput = {
    AND?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
    OR?: PurchaseOrderItemScalarWhereInput[]
    NOT?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
    id?: StringFilter<"PurchaseOrderItem"> | string
    purchaseOrderId?: StringFilter<"PurchaseOrderItem"> | string
    productId?: StringFilter<"PurchaseOrderItem"> | string
    quantity?: IntFilter<"PurchaseOrderItem"> | number
    unitPrice?: FloatFilter<"PurchaseOrderItem"> | number
    subtotal?: FloatFilter<"PurchaseOrderItem"> | number
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrderItem"> | boolean
  }

  export type StockMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutProductInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutProductBrandInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductBrandInput = {
    id?: string
    categoryId: string
    supplierId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput>
  }

  export type ProductCreateManyProductBrandInputEnvelope = {
    data: ProductCreateManyProductBrandInput | ProductCreateManyProductBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutProductBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProductBrandInput, ProductUncheckedUpdateWithoutProductBrandInput>
    create: XOR<ProductCreateWithoutProductBrandInput, ProductUncheckedCreateWithoutProductBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProductBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProductBrandInput, ProductUncheckedUpdateWithoutProductBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutProductBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductBrandInput>
  }

  export type ProductCreateWithoutInventoryLevelInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryLevelInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryLevelInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryLevelInput, ProductUncheckedCreateWithoutInventoryLevelInput>
  }

  export type WareHouseCreateWithoutInventoryLevelInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    fromStockMovement?: StockMovementCreateNestedManyWithoutFromWarehouseInput
    toStockMovement?: StockMovementCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutInventoryLevelInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    fromStockMovement?: StockMovementUncheckedCreateNestedManyWithoutFromWarehouseInput
    toStockMovement?: StockMovementUncheckedCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutInventoryLevelInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutInventoryLevelInput, WareHouseUncheckedCreateWithoutInventoryLevelInput>
  }

  export type ProductUpsertWithoutInventoryLevelInput = {
    update: XOR<ProductUpdateWithoutInventoryLevelInput, ProductUncheckedUpdateWithoutInventoryLevelInput>
    create: XOR<ProductCreateWithoutInventoryLevelInput, ProductUncheckedCreateWithoutInventoryLevelInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryLevelInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryLevelInput, ProductUncheckedUpdateWithoutInventoryLevelInput>
  }

  export type ProductUpdateWithoutInventoryLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WareHouseUpsertWithoutInventoryLevelInput = {
    update: XOR<WareHouseUpdateWithoutInventoryLevelInput, WareHouseUncheckedUpdateWithoutInventoryLevelInput>
    create: XOR<WareHouseCreateWithoutInventoryLevelInput, WareHouseUncheckedCreateWithoutInventoryLevelInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutInventoryLevelInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutInventoryLevelInput, WareHouseUncheckedUpdateWithoutInventoryLevelInput>
  }

  export type WareHouseUpdateWithoutInventoryLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fromStockMovement?: StockMovementUpdateManyWithoutFromWarehouseNestedInput
    toStockMovement?: StockMovementUpdateManyWithoutToWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutInventoryLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    fromStockMovement?: StockMovementUncheckedUpdateManyWithoutFromWarehouseNestedInput
    toStockMovement?: StockMovementUncheckedUpdateManyWithoutToWarehouseNestedInput
  }

  export type PurchaseOrderItemCreateWithoutPurchaseOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    product: ProductCreateNestedOneWithoutPurchaseOrderItemInput
  }

  export type PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    create: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope = {
    data: PurchaseOrderItemCreateManyPurchaseOrderInput | PurchaseOrderItemCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type SupplierCreateWithoutPurchaseOrderInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Product?: ProductUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPurchaseOrderInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type UserCreateWithoutPurchaseOrderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    update: XOR<PurchaseOrderItemUpdateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    data: XOR<PurchaseOrderItemUpdateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemScalarWhereInput
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type SupplierUpsertWithoutPurchaseOrderInput = {
    update: XOR<SupplierUpdateWithoutPurchaseOrderInput, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPurchaseOrderInput, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type SupplierUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Product?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type UserUpsertWithoutPurchaseOrderInput = {
    update: XOR<UserUpdateWithoutPurchaseOrderInput, UserUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseOrderInput, UserUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type UserUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutPurchaseOrderItemInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchaseOrderItemInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchaseOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseOrderItemInput, ProductUncheckedCreateWithoutPurchaseOrderItemInput>
  }

  export type PurchaseOrderCreateWithoutPurchaseOrderItemInput = {
    id?: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
    user: UserCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput = {
    id?: string
    supplierId: string
    userId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
  }

  export type ProductUpsertWithoutPurchaseOrderItemInput = {
    update: XOR<ProductUpdateWithoutPurchaseOrderItemInput, ProductUncheckedUpdateWithoutPurchaseOrderItemInput>
    create: XOR<ProductCreateWithoutPurchaseOrderItemInput, ProductUncheckedCreateWithoutPurchaseOrderItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchaseOrderItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchaseOrderItemInput, ProductUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type ProductUpdateWithoutPurchaseOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PurchaseOrderUpsertWithoutPurchaseOrderItemInput = {
    update: XOR<PurchaseOrderUpdateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderItemInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type PurchaseOrderUpdateWithoutPurchaseOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
    user?: UserUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WareHouseCreateWithoutFromStockMovementInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutWarehouseInput
    toStockMovement?: StockMovementCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutFromStockMovementInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutWarehouseInput
    toStockMovement?: StockMovementUncheckedCreateNestedManyWithoutToWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutFromStockMovementInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutFromStockMovementInput, WareHouseUncheckedCreateWithoutFromStockMovementInput>
  }

  export type ProductCreateWithoutStockMovementInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockMovementInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockMovementInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockMovementInput, ProductUncheckedCreateWithoutStockMovementInput>
  }

  export type WareHouseCreateWithoutToStockMovementInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutWarehouseInput
    fromStockMovement?: StockMovementCreateNestedManyWithoutFromWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutToStockMovementInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutWarehouseInput
    fromStockMovement?: StockMovementUncheckedCreateNestedManyWithoutFromWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutToStockMovementInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutToStockMovementInput, WareHouseUncheckedCreateWithoutToStockMovementInput>
  }

  export type UserCreateWithoutStockMovementInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutUserInput
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStockMovementInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutUserInput
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStockMovementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockMovementInput, UserUncheckedCreateWithoutStockMovementInput>
  }

  export type WareHouseUpsertWithoutFromStockMovementInput = {
    update: XOR<WareHouseUpdateWithoutFromStockMovementInput, WareHouseUncheckedUpdateWithoutFromStockMovementInput>
    create: XOR<WareHouseCreateWithoutFromStockMovementInput, WareHouseUncheckedCreateWithoutFromStockMovementInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutFromStockMovementInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutFromStockMovementInput, WareHouseUncheckedUpdateWithoutFromStockMovementInput>
  }

  export type WareHouseUpdateWithoutFromStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutWarehouseNestedInput
    toStockMovement?: StockMovementUpdateManyWithoutToWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutFromStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutWarehouseNestedInput
    toStockMovement?: StockMovementUncheckedUpdateManyWithoutToWarehouseNestedInput
  }

  export type ProductUpsertWithoutStockMovementInput = {
    update: XOR<ProductUpdateWithoutStockMovementInput, ProductUncheckedUpdateWithoutStockMovementInput>
    create: XOR<ProductCreateWithoutStockMovementInput, ProductUncheckedCreateWithoutStockMovementInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockMovementInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockMovementInput, ProductUncheckedUpdateWithoutStockMovementInput>
  }

  export type ProductUpdateWithoutStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WareHouseUpsertWithoutToStockMovementInput = {
    update: XOR<WareHouseUpdateWithoutToStockMovementInput, WareHouseUncheckedUpdateWithoutToStockMovementInput>
    create: XOR<WareHouseCreateWithoutToStockMovementInput, WareHouseUncheckedCreateWithoutToStockMovementInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutToStockMovementInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutToStockMovementInput, WareHouseUncheckedUpdateWithoutToStockMovementInput>
  }

  export type WareHouseUpdateWithoutToStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutWarehouseNestedInput
    fromStockMovement?: StockMovementUpdateManyWithoutFromWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutToStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutWarehouseNestedInput
    fromStockMovement?: StockMovementUncheckedUpdateManyWithoutFromWarehouseNestedInput
  }

  export type UserUpsertWithoutStockMovementInput = {
    update: XOR<UserUpdateWithoutStockMovementInput, UserUncheckedUpdateWithoutStockMovementInput>
    create: XOR<UserCreateWithoutStockMovementInput, UserUncheckedCreateWithoutStockMovementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockMovementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockMovementInput, UserUncheckedUpdateWithoutStockMovementInput>
  }

  export type UserUpdateWithoutStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutUserNestedInput
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStockMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutUserNestedInput
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutProductPriceHistoryInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelCreateNestedManyWithoutProductInput
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productBrand: ProductBrandCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductPriceHistoryInput = {
    id?: string
    categoryId: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    InventoryLevel?: InventoryLevelUncheckedCreateNestedManyWithoutProductInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductPriceHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
  }

  export type UserCreateWithoutProductPriceHistoryInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductPriceHistoryInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    StockMovement?: StockMovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductPriceHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductPriceHistoryInput, UserUncheckedCreateWithoutProductPriceHistoryInput>
  }

  export type ProductUpsertWithoutProductPriceHistoryInput = {
    update: XOR<ProductUpdateWithoutProductPriceHistoryInput, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
    create: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductPriceHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductPriceHistoryInput, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type ProductUpdateWithoutProductPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutProductPriceHistoryInput = {
    update: XOR<UserUpdateWithoutProductPriceHistoryInput, UserUncheckedUpdateWithoutProductPriceHistoryInput>
    create: XOR<UserCreateWithoutProductPriceHistoryInput, UserUncheckedCreateWithoutProductPriceHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductPriceHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductPriceHistoryInput, UserUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type UserUpdateWithoutProductPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductPriceHistoryCreateManyUserInput = {
    id?: string
    productId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderCreateManyUserInput = {
    id?: string
    supplierId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type StockMovementCreateManyUserInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductPriceHistoryNestedInput
  }

  export type ProductPriceHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StockMovementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromWarehouse?: WareHouseUpdateOneWithoutFromStockMovementNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementNestedInput
    toWarehouse?: WareHouseUpdateOneWithoutToStockMovementNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelCreateManyWarehouseInput = {
    id?: string
    productId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateManyFromWarehouseInput = {
    id?: string
    toWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateManyToWarehouseInput = {
    id?: string
    fromWarehouseId?: string | null
    userId: string
    productId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryLevelNestedInput
  }

  export type InventoryLevelUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutFromWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementNestedInput
    toWarehouse?: WareHouseUpdateOneWithoutToStockMovementNestedInput
    user?: UserUpdateOneRequiredWithoutStockMovementNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutFromWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutFromWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutToWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromWarehouse?: WareHouseUpdateOneWithoutFromStockMovementNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementNestedInput
    user?: UserUpdateOneRequiredWithoutStockMovementNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutToWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutToWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManySupplierInput = {
    id?: string
    categoryId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderCreateManySupplierInput = {
    id?: string
    userId: string
    orderDate: Date | string
    status?: $Enums.PurchaseOrderStatus
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput
    user?: UserUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    supplierId: string
    productBrandId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    productBrand?: ProductBrandUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    productBrandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryLevelCreateManyProductInput = {
    id?: string
    warehouseId: string
    quantity: number
    minStock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPriceHistoryCreateManyProductInput = {
    id?: string
    userId: string
    previousPrice: number
    newPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemCreateManyProductInput = {
    id?: string
    purchaseOrderId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type StockMovementCreateManyProductInput = {
    id?: string
    fromWarehouseId?: string | null
    toWarehouseId?: string | null
    userId: string
    quantity: number
    reason: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLevelUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WareHouseUpdateOneRequiredWithoutInventoryLevelNestedInput
  }

  export type InventoryLevelUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLevelUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductPriceHistoryNestedInput
  }

  export type ProductPriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    previousPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderItemNestedInput
  }

  export type PurchaseOrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StockMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromWarehouse?: WareHouseUpdateOneWithoutFromStockMovementNestedInput
    toWarehouse?: WareHouseUpdateOneWithoutToStockMovementNestedInput
    user?: UserUpdateOneRequiredWithoutStockMovementNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    toWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyProductBrandInput = {
    id?: string
    categoryId: string
    supplierId: string
    name: string
    sku: string
    description?: string | null
    entryPrice: number
    unitPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type ProductUpdateWithoutProductBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    InventoryLevel?: InventoryLevelUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput
    StockMovement?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemCreateManyPurchaseOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderItemUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutPurchaseOrderItemNestedInput
  }

  export type PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}