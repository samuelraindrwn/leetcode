# LeetCode Practice Repo

Repo ini dipakai untuk belajar solve algoritma dari LeetCode.

## Konvensi Penamaan File

Nama file menggunakan format: `{nomor}_{DD-MM-YYYY}.{ext}`

- `{nomor}` adalah nomor urut file (1, 2, 3, dst.) — cek file yang sudah ada untuk menentukan nomor berikutnya

Contoh: `1_22-05-2026.js`, `2_22-05-2026.ts`, `3_22-05-2026.py`, `4_22-05-2026.java`

## Membuat File Baru

### "new file js"
1. Cek file `.js` yang sudah ada untuk menentukan nomor urut berikutnya
2. Buat file dengan nama `{nomor}_{TANGGAL_HARI_INI}.js` (format DD-MM-YYYY)
3. Isi dengan template berikut:

```js
// Problem: [nama problem]
// Link: https://leetcode.com/problems/[slug]/
// Difficulty: Easy | Medium | Hard

/**
 * @param {*} input
 * @return {*}
 */
function solution(input) {

}

// Test
console.log(solution());
```

### "new file ts"
1. Cek file `.ts` yang sudah ada untuk menentukan nomor urut berikutnya
2. Buat file dengan nama `{nomor}_{TANGGAL_HARI_INI}.ts` (format DD-MM-YYYY)
3. Isi dengan template berikut:

```ts
// Problem: [nama problem]
// Link: https://leetcode.com/problems/[slug]/
// Difficulty: Easy | Medium | Hard

function solution(input: any): any {

}

// Test
console.log(solution());
```

### "new file py"
1. Cek file `.py` yang sudah ada untuk menentukan nomor urut berikutnya
2. Buat file dengan nama `{nomor}_{TANGGAL_HARI_INI}.py` (format DD-MM-YYYY)
3. Isi dengan template berikut:

```py
# Problem: [nama problem]
# Link: https://leetcode.com/problems/[slug]/
# Difficulty: Easy | Medium | Hard

from typing import List

def solution(input):
    pass

# Test
print(solution())
```

### "new file java"
1. Cek file `.java` yang sudah ada untuk menentukan nomor urut berikutnya
2. Buat file dengan nama `{nomor}_{TANGGAL_HARI_INI}.java` (format DD-MM-YYYY)
3. Isi dengan template berikut:

```java
// Problem: [nama problem]
// Link: https://leetcode.com/problems/[slug]/
// Difficulty: Easy | Medium | Hard

public class Solution {
    public void solution() {

    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.solution());
    }
}
```

## Catatan

- Satu file per problem
- Nomor urut dimulai dari 1 dan terus bertambah
- Cara run test: `node` (JS), `npx ts-node` (TS), `python` (PY), `javac && java Solution` (Java)
