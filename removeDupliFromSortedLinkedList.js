/*Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:
1->1->2
= 1->2

Input: head = [1,1,2]
Output: [1,2]
Example 2:
1->1->2->3->3
= 1->2->3
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let current = head;
  while (current != null) {
    let tmp = current;
    while (tmp != null && current.val == tmp.val) {
      tmp = tmp.next;
    }

    current.next = tmp;
    current = current.next;
  }

  return head;
};

function printList(list) {
  let curr = list;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

let list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(3);

const result = deleteDuplicates(list);
printList(result);
