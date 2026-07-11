class HCPNotFoundException(Exception):
    """Raised when the requested HCP does not exist."""


class DuplicateHCPException(Exception):
    """Raised when an HCP with the same email already exists."""