const addCounter = (list) => {
  //   list.push(0);      // Mutable
  //   return list;
  //  return list.concat([0]);  // immutable
      return [...list, 0];      // immutable
  };
  const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore)

    expect(
      addCounter(listBefore)
    ).toEqual(listAfter);
  };
  /************************************************************/
  const removeCounter = (list, index) => {
  //   list.splice(index, 1);
  //   return list;
  //   return list
  //     .slice(0,index)
  //     .concat(list.slice(index + 1 ))
      return [...list.slice(0,index),
               ...list.slice(index+1)]
  };

  const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);
    expect(
      removeCounter(listBefore, 1)
    ).toEqual(listAfter);
  };
  /************************************************************/
  const incrementCounter = (list,index) => {
  //   list[index]++;
  //   return list;
  //   return list
  //     .slice(0,index)
  //     .concat([list[index]+1])
  //     .concat(list.slice(index+1 ));
    return [
      ...list.slice(0, index),
      list[index] +1,
      ...list.slice(index + 1)
    ];
  };

  const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);
    expect(incrementCounter(listBefore, 1)).toEqual(listAfter)
  }
  /************************************************************/
  testAddCounter();
  testRemoveCounter();
  testIncrementCounter();
  console.log('All Tests Passed.')

