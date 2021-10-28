# 2.12.0

- Add 
  - OnceIter
    > Cache the results of the iterator

  - pipe
    > fp style pipe function
  
    **Example**
    ```ts
    const f = pipe(
        (a: number, b: number) => a + b,
        (a: number) => a + 2,
    )
    f(1, 2) // => 5
    ```

  - seq/ops  
    move seq ops from `seq` to `seq/ops`

  - seq/fp
    > fp style seq ops

  - seq/linq
    > linq style seq alias

  - seq.includes
    > same as `array.includes`

  - se.sum
  - seq.avg
  - seq.toArray
  - seq.toSet
  - seq.toMap

  - static Seq.empty
    > Create empty seq

    **Example**

    ```ts
    Seq.empty<number>()
    ```

  - static Seq.to
    > Create a Seq from a range starting from 0 

    **Example**

    ```ts
    Seq.to(3) // [0, 1, 2]
    ```

  - static Seq.range
    >  Create a Seq from a range

    **Example**

    ```ts
    Seq.range(3, 6) // [3, 4, 5]
    ```

  - seq.push
    > like array.push

  - seq.unshift
    > like array.unshift

  - seq.as
    > cast types

  - seq.groupBy
    > linq groupBy

  - seq.product
    > Cartesian product

    **Example**
    ```ts
    seq([1, 2, 3]).product(['a', 'b'])
    // returns
    [
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
        [3, 'a'],
        [3, 'b'],
    ]
    ```

  - seq.relate
    > sql inner join

    **Example**
    ```ts
    seq([1, 2, 3]).relate(['1', '2', '3'], a => a, b => +b)
    // returns
    [
        [1, '1'],
        [2, '2'],
        [3, '3'],
    ]
    ```

# 2.11.0
- Add
  - Linked\<T>, LinkedNode\<T>
    > Doubly Linked List  

    **Example**
    ```ts
    const l = new Linked<number>()
    l.push(1)
    ```

# 2.9.0

- Add
  - AsyncPool 
    > Asynchronous pool 
    > Used to ensure that the number of asynchronous executions at the same time does not exceed the limit

    **Example**  
    ```ts
    const pool = new AsyncPool(1000)
    pool.run(() => fetch('foo/bar'))
    ```

# 2.8.0

Add types
- TupleConcat
- KeyofExcludeValue
- KeyofExtractValue
- PickValue
- OmitValue
- ObjFromEntries
- ObjKeys
- ObjVals
- ObjEntry
- EntryValue
- EntryKey
- ObjPath
- ValByPath
- ObjPathEntry
