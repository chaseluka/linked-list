import { LinkedList, Node } from "./linkedlist";

const list = new LinkedList(2);

test("do something", () => {
  list.prepend(2);
  list.prepend(1);
  expect(list.head.value).toBe(1);
});
test("append", () => {
  list.apend(3);
  expect(list.tail().value).toBe(3);
});
test("size", () => {
  expect(list.size()).toBe(3);
});
test("getHead", () => {
  expect(list.getHead().value).toBe(1);
});
test("tail", () => {
  expect(list.tail().next).toBe(null);
});
test("get node at index", () => {
  expect(list.at(2).value).toBe(3);
});
test("remove last node", () => {
  list.pop();
  expect(list.tail().value).toBe(2);
});
test("list contains value", () => {
  expect(list.contains(2)).toBe(true);
});
test("return index of a value if it exists", () => {
  expect(list.find(2)).toBe(1);
});
test("return null if value isnt found", () => {
  expect(list.find(33)).toBe(null);
});
test("return null if value isnt found", () => {
  expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> null");
});
test("insert a node at index", () => {
  list.insertAt(20, 1);
  expect(list.at(1).value).toBe(20);
});
test("remove node at index", () => {
  list.removeAt(1);
  expect(list.at(1).value).toBe(2);
});
