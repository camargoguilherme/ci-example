const { gerarNumeroAleatorio, acharCaracter } = require("../lib/utils");

describe("Utils", () => {
  describe("gerarNumeroAleatorio", () => {
    test("inicio nao pode ser negativo", () => {
      expect(gerarNumeroAleatorio(-4, 16)).toBe(-1);
    });

    test("fim nao pode ser negativo", () => {
      expect(gerarNumeroAleatorio(20, -5)).toBe(-1);
    });

    test("inicio maior que o fim", () => {
      expect(gerarNumeroAleatorio(20, 12)).toBe(-1);
    });

    test("inicio igual ao fim", () => {
      expect(gerarNumeroAleatorio(20, 20)).toBe(-1);
    });
  });

  describe("acharCaracter", () => {
    test("comprimento invalido", () => {
      expect(acharCaracter(-4, "abcde", "c")).toBe("comprimento invalido");
    });

    test("comprimento invalido", () => {
      expect(acharCaracter(6, "abcde", "c")).toBe(
        "comprimento fornecido diferente do comprimento real"
      );
    });

    test("dados válidos e não encontra o caracter", () => {
      expect(acharCaracter(6, "qwerty", "c")).toBe("caracter encontrado");
    });

    test("dados válidos e encontra o caracter", () => {
      expect(acharCaracter(5, "abcde", "c")).toBe(2);
    });
  });
});
