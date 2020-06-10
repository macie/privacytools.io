// Preserves links from old single-page layout.
// (keyword var is used to support older browsers)

var redirections = {
    // fromPath: toPath
    '/#ukusa': '/providers/',
    '/#vpn': '/providers/vpn/',
    '/#email': '/providers/email/',
    '/#cloud': '/providers/cloud-storage/',
    '/#social': '/providers/social-networks/',
    '/#dns': '/providers/dns/',
    '/#search': '/providers/search-engines/',
    '/#host': '/providers/hosting/',
    '/#paste': '/providers/paste/',
    '/#browser': '/browsers/',
    '/#fingerprint': '/browsers/#fingerprint',
    '/#webrtc': '/browsers/#webrtc',
    '/#addons': '/browsers/#addons',
    '/#about_config': '/browsers/#about_config',
    '/#clients': '/software/email/',
    '/#messaging': '/software/email/#messaging',
    '/#im': '/software/im/',
    '/#voip': '/software/voip/',
    '/#filesharing': '/software/file-sharing/',
    '/#mycloud': '/software/cloud/',
    '/#sync': '/software/file-sync/',
    '/#pw': '/software/passwords/',
    '/#calendar_contacts': '/software/calendar-contacts/',
    '/#encrypt': '/software/encryption-tools/',
    '/#darknets': '/software/networks/',
    '/#notebook': '/software/notebooks/',
    '/#productivity': '/software/productivity/',
    '/#os': '/operating-systems/',
    '/#live_os': '/operating-systems/#live_os',
    '/#mobile_os': '/operating-systems/#mobile_os',
    '/#aaddons': '/operating-systems/#aaddons',
    '/#firmware': '/operating-systems/#firmware',
    '/#win10': '/operating-systems/#win10'
};

var currentRelativePath = window.location.pathname + window.location.search + window.location.hash;
var redirectTo = redirections[currentRelativePath];
var hasKnownRedirection = typeof redirectTo !== "undefined";

if (hasKnownRedirection) {
    // redirect with removing source URL from browser history (similar to HTTP 301)
    window.location.replace(redirectTo);
}
