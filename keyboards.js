window.KEYBOARDS = String.raw`

# One block per keyboard, separated by an empty line.
# Leave out any line you do not need. Lines starting with # are ignored.
# Type \n to force a line break inside a value.
#
# IMPORTANT: do not delete the very first line (window.KEYBOARDS = ...) and the
# very last line of this file. Without them the cards cannot be loaded.
# Never type a backtick character inside this text.
#
# Fields (all optional except Name; the order of the lines does not matter):
#   Name:      Required. The title of the card. A block without a Name is ignored.
#   Status:    Shown under the name, e.g. the group buy or build status.
#   Switches:  The switches used.
#   Keycaps:   The keycap set used.
#   Plate:     The plate material or type.
#   Notes:     Free text shown at the end of the specs.
#              Also accepted: Note, Comment, Comments.
#   URL:       A link shown at the bottom of the card.

Name: Example 40%
Status: OpenSource
Switches: Invokeys Hojicha Reserve
Keycaps: DSS 99Cent
Plate: Aluminium
Notes: Replace these examples with your own keyboards.

Name: Example 30%
Status: Work in progress
Switches: KTT Roses
Keycaps: SLK Dessau
URL: https://example.com


# ---- Do not delete the line below: it closes the list. ----
`;
