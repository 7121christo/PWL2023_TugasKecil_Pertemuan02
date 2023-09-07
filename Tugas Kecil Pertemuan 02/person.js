// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
  // ternary operator, menggantikan if-else
  const info = () => {
    // 2. tampilkan full name, sex dan age
    return `Full name: ${fullName}, Age: ${age}, Gender: ${isMale ? "Male" : "Female"}`;
  };
  return {
    get getInfo() {
      // 3. kembalikan nilai info diatas
      return info();
    },
    toString() {
      // 4. kembalikan nilai info diatas
      return info();
    },
    addAge: (years) => {
      age += years;
    }, // 5. kembalikan usia sekarang ditambah dengan tahun inputan user,
    setAge: (newAge) => {
      age = newAge;
    }, // 6. fungsi yang mengeset usia yang baru,
    rename: (newName) => {
      fullName = newName;
    }, // 7. fungsi yang mengeset nama yang baru,
    // 8. kembalikan semua nilai dengan shorthand property
    get allInfo() {
      return { fullName, age, isMale };
    },
  };
};

// 9. export objek person sebagai sebuah modul
export default Person;
