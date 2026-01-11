  const unUniqueArr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
  const uniqueSet = new Set(unUniqueArr); // [1, 2, 3, 4, 5]
   const uniqueArr = Array.from(uniqueSet);
  console.log(uniqueArr);