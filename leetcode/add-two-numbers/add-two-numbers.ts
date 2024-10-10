/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return recurse(l1, l2, 0)
};


function recurse(l1: ListNode | null, l2: ListNode | null, surplus: number): ListNode | null {
    let firstValue = (l1 != null) ? l1.val : 0
    let secondValue = (l2 != null) ? l2.val : 0
    let hasSurplus = (firstValue + secondValue + surplus) - 10 >= 0
    let value = hasSurplus ? (firstValue + secondValue + surplus) - 10 : firstValue + secondValue + surplus
    surplus = hasSurplus ? 1 : 0

    let l3 = new ListNode(value, null);

    let firstNext = (l1 == null || l1.next == null) ? null : l1.next
    let secondNext = (l2 == null || l2.next == null) ? null : l2.next

    if (firstNext == null && secondNext == null && surplus == 0) {
        return l3
    }

    l3.next = recurse(firstNext, secondNext, surplus);
    return l3
};