/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p = l1;
  let q = l2;
  let carry = 0;
  const head = new ListNode(0);
  let l3 = head;
  while (p !== null || q !== null) {
    const x = p && p.val || 0;
    const y = q && q.val || 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    l3.next = new ListNode(sum % 10);
    l3 = l3.next;
    if (p !== null) {
      p = p.next;
    }
    if (q !== null) {
      q = q.next;
    }
  }
  if (carry) {
    l3.next = new ListNode(carry);
  }
  return head.next;
};